import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly characterRepository: Repository<News>,
  ) {}

  async getAll() {
    return this.characterRepository.find();
  }

  async addCharacter(dto: CreateNewsDto) {
    const newCharacter = this.characterRepository.create(dto);
    return this.characterRepository.save(newCharacter);
  }
}
