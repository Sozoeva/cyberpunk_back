import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@ApiTags('characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @ApiOperation({
    summary: 'Получение всех персонажей',
  })
  @Get()
  async getAll() {
    return this.charactersService.getAll();
  }

  @ApiOperation({
    summary: 'Создание персонажа',
  })
  @Post()
  @ApiBody({ type: CreateCharacterDto })
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateCharacterDto) {
    return this.charactersService.addCharacter(dto);
  }

  @ApiOperation({
    summary: 'Обновление данных персонажа',
  })
  @ApiBody({ type: UpdateCharacterDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateCharacterDto) {
    return this.charactersService.updateCharacter(id, updateUserDto);
  }

  @ApiOperation({
    summary: 'Удаление персонажа',
  })
  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  async deleteTask(@Param('id') id: string) {
    return this.charactersService.deleteCharacter(id);
  }
}
