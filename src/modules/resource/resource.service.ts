import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from './entities/resource.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private readonly characterRepository: Repository<Resource>,
  ) {}
  async getAll() {
    return this.characterRepository.find();
  }

  async addCharacter(dto: CreateResourceDto) {
    const newCharacter = this.characterRepository.create(dto);
    return this.characterRepository.save(newCharacter);
  }
}
