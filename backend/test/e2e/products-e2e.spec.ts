import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Next } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { nextTick } from 'process';
import { get } from 'http';

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
        if (!result.body[0]) {
        }
        else {
          expect(Object.keys(result.body[0])).toEqual(dataResponse);
        }
      });
  });

  it('/products/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/products/8ca2aa43-ed3a-4cc7-9f6f-7757c604920a')
      .then((result) => {
        const resultParsed = JSON.stringify(result.body);
        const rescataid = result.body.productID;
        if (resultParsed.length > 0) {    //hay que generar EN EL CODIGO una respuesta para indicar que la BD está vacía
          expect(result.statusCode).toBe(200);
          expect(result.body).toBeDefined();
          expect(resultParsed.length > 0).toBeTruthy();
        }
        else {
        }
      });
  });
});


// it('/products (POST)', () => {
//   return request(app.getHttpServer())
//     .post('/components')
//     .then((result) => {
//       expect(result.statusCode).toEqual(200);
//       expect(Object.keys(result.body[0])).toEqual(dataResponse);
//     });
// });
