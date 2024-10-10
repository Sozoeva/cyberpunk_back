import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('news')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @ApiOperation({
    summary: 'Получение всех новостей',
  })
  @Get()
  async getAll() {
    return this.newsService.getAll();
  }

  @ApiOperation({
    summary: 'Создание новостей',
  })
  @Post()
  @ApiBody({ type: CreateNewsDto })
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateNewsDto) {
    return this.newsService.addCharacter(dto);
  }
}
