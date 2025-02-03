import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as uuid from "uuid"
import * as path from "path"
import * as fs from "fs"

@Injectable()
export class FileService {
  async saveFile(image: any): Promise<string> {
    try {

      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve(__dirname, "..", "..", "static");
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, ({ recursive: true }))
      }
      fs.writeFileSync(path.join(filePath, fileName), image.buffer);

      return fileName

    } catch (error) {
      throw new InternalServerErrorException("Filega yozishda xatolik")
    }
  }

  AWS_S3_BUCKET = 'chelakn1';
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  async uploadFile(image) {
    console.log(image);
    const { originalname } = image;

    return await this.s3_upload(
      image.buffer,
      this.AWS_S3_BUCKET,
      originalname,
      image.mimetype,
    );
  }

  async s3_upload(image, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: image,
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'ap-south-1',
      },
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }

}
