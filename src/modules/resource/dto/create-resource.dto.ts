import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateResourceDto {
  @ApiProperty({
    description: 'Наименование новостей',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Изображение новостей',
  })
  @IsString()
  img: string;
}
