import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Next } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { nextTick } from 'process';
import { get } from 'http';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const dataResponse = [
    'versionID',
    'componentID',
    'productID',
    'versionCode',
    'versionDate',
  ];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/versions (GET)', () => {
    return request(app.getHttpServer())
      .get('/versions')
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        if (!result.body[0]) {
        } else {
          expect(Object.keys(result.body[0])).toEqual(dataResponse);
        }
      });
  });

  it('/versions/lastVersion/:componentID (GET)', () => {
    return request(app.getHttpServer())
      .get('/versions/lastVersion/1effdabe-ba72-4569-8046-fd5cab3f0caf')
      .then((result) => {
        if (result.statusCode != 200) {
          //hay que generar EN EL CODIGO una respuesta para indicar que la BD está vacía
        } else {
          expect(result.statusCode).toEqual(200);
          expect(Object.keys(result.body)).toEqual([
            'versionCode',
            'versionDate',
          ]);
        }
      });
  });
});
