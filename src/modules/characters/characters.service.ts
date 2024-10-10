import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>,
  ) {}

  async getAll() {
    return this.characterRepository.find();
  }

  async addCharacter(dto: CreateCharacterDto) {
    const newCharacter = this.characterRepository.create(dto);
    return this.characterRepository.save(newCharacter);
  }

  async updateCharacter(id: string, dto: UpdateCharacterDto) {
    const characterInfo = await this.characterRepository.findOne({
      where: { id },
    });

    if (!characterInfo) {
      throw new NotFoundException(`Персонаж с ID ${id} не найден.`);
    }

    characterInfo.name = dto.name || characterInfo.name;
    characterInfo.img = dto.img || characterInfo.img;
    characterInfo.description = dto.description || characterInfo.description;

    return this.characterRepository.save(characterInfo);
  }

  async deleteCharacter(id: string) {
    const result = await this.characterRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Персонаж с ID ${id} не найден`);
    }

    return { message: 'Персонаж успешно удален' };
  }
}
