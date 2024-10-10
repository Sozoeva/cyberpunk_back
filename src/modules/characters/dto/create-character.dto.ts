import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCharacterDto {
  @ApiProperty({
    description: 'Имя персонажа',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Изображение персонажа',
  })
  @IsString()
  img: string;

  @ApiProperty({
    description: 'Описание персонажа',
  })
  @IsString()
  description: string;
}
