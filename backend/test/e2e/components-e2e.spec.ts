import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const dataResponse = [
    'componentID',
    'productID',
    'componentName',
    'componentType',
    'versionURL',
    'releaseURL',
    'crawlerTime',
    'crawlerLastCheck',
    'componentCreateDate',
    'componentCreateUser',
    'componentUpdateDate',
    'componentUpdateUser',
    'versionCode',
    'versionDate',
    'componentStatus',
  ];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/components (GET)', () => {
    return request(app.getHttpServer())
      .get('/components')
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(Object.keys(result.body[0])).toEqual(dataResponse);
        //   Agregar condicional con BD vacia
      });
  });
  /*
  it('/components (POST)', () => {
    return request(app.getHttpServer())
      .post('/components')
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(Object.keys(result.body[0])).toEqual(dataResponse);
      });
  });
  */
});
