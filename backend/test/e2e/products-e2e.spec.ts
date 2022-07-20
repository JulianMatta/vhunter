import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const dataResponse = [
    'productID',
    'productName',
    'productCreateDate',
    'productCreateUser',
    'productUpdateDate',
    'productUpdateUser',
    'productStatus',
  ];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(Object.keys(result.body[0])).toEqual(dataResponse);
        //   Agregar condicional con BD vacia
      });
  });
  /*
  it('/products (POST)', () => {
    return request(app.getHttpServer())
      .post('/components')
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(Object.keys(result.body[0])).toEqual(dataResponse);
      });
  });
  */
});
