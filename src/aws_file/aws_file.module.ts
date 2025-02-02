import { Module } from '@nestjs/common';
import { AwsFileService } from './aws_file.service';

@Module({
  providers: [AwsFileService],
  exports:[AwsFileService]
})
export class AwsFileModule {}
