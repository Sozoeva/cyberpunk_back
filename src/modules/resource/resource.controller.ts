import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';

@ApiTags('resource')
@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @ApiOperation({
    summary: 'Получение всех новостей',
  })
  @Get()
  async getAll() {
    return this.resourceService.getAll();
  }

  @ApiOperation({
    summary: 'Создание новостей',
  })
  @Post()
  @ApiBody({ type: CreateResourceDto })
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateResourceDto) {
    return this.resourceService.addCharacter(dto);
  }
}
