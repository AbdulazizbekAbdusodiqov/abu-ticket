import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SingleFileService } from './single-file.service';

@Controller()
export class SingleFileController {
  constructor(private readonly singleFileService: SingleFileService) {}

  @Post('single-upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, callback) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(file.originalname.toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (extname && mimetype) {
          callback(null, true);
        } else {
          callback(
            new BadRequestException('Faqat image filelar yuklash mumkin!'),
            false,
          );
        }
      },
      limits: {
        fileSize: 2 * 1024 * 1024, // Maksimal fayl hajmi: 2MB
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.singleFileService.uploadFile(file);
  }
}
