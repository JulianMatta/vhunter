/* eslint-disable prettier/prettier */
import { Body, Controller, Get } from '@nestjs/common';
import { ScrapperService } from "./scrapper.service";

@Controller('scrapper')
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) { }
  @Get('/')
  selectorComponentType(@Body('versionURL') versionURL: string, @Body('componentType') componentType: string) {
    return this.scrapperService.selectorComponentType(versionURL, componentType);
  }
}
