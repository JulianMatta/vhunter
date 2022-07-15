import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ComponentsModule } from './components/components.module';
import { VersionsModule } from './versions/versions.module';
import { Products } from './products/products.entity';
import { Components } from './components/dto/components.entity';
import { Versions } from './versions/dto/versions.entity';
import { ScrapperModule } from './scrapper/scrapper.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CrawlerModule } from './crawler/crawler.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/dto/user.entity';
import { VhunterController } from './vhunter/vhunter.controller';

@Module({
  imports: [
    ProductsModule,
    ComponentsModule,
    VersionsModule,
    ScrapperModule,
    CrawlerModule,
    AuthModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-82854-0.cloudclusters.net',
      port: 12388,
      username: 'admin',
      password: 'jpMh4GMb',
      database: 'vhunter',
      autoLoadEntities: true,
      entities: [Products, Components, Versions, User],
      synchronize: true,
    }),
  ],
  controllers: [VhunterController],
})
export class AppModule {}
