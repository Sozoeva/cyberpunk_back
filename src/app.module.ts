import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './modules/characters/characters.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './modules/characters/entities/character.entity';
import { NewsModule } from './modules/news/news.module';
import { News } from './modules/news/entities/news.entity';
import { Resource } from './modules/resource/entities/resource.entity';
import { ResourceModule } from './modules/resource/resource.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Character, News, Resource],
      synchronize: true,
    }),
    CharactersModule,
    NewsModule,
    ResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
