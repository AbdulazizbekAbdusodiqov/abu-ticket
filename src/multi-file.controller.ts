import {
  BadRequestException,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MultiFileService } from './multi-file.service';

@Controller()
export class MultiFileController {
  constructor(private readonly multiFileService: MultiFileService) {}

  @Post('multi-upload')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      // 10 ta file max
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
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    const uploadPromises = files.map((file) =>
      this.multiFileService.uploadFile(file),
    );
    const results = await Promise.all(uploadPromises);
    return results;
  }
}
