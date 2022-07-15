import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ComponentsModule } from '../src/components/components.module';
import { ComponentsService } from '../src/components/components.service';
import { INestApplication } from '@nestjs/common';
import { url } from 'inspector';

const mockComponentsService = () => ({
  //ESTO ES LO QUE SE RECIBE ----------------------------------------------------|
  getAllComponent: () => [
    {
      componentID: '2d3ea7aa-d899-4a00-b74d-6465adc4d0c2',
      productID: 'a4582960-d985-4e60-a85b-057448a33efe',
      componentName: 'FLOWAPP',
      componentType: 'WEB',
      versionURL: 'https://web.flow.com.ar/auth/v2/revision',
      releaseURL: 'URLrelease',
      crawlerTime: 'ONEHOUR',
      crawlerLastCheck: '2022-06-29T14:43:47.000Z',
      componentCreateDate: '2022-06-29T14:43:47.000Z',
      componentCreateUser: 'EL PEPE',
      componentUpdateDate: '2022-06-29T14:43:47.000Z',
      componentUpdateUser: 'EL JUAN',
      versionCode: '\t1.0.9',
      versionDate: '2022-07-07T18:10:40.000Z',
      componentStatus: true,
    },
  ],
});

// VERSION 1

// let app: INestApplication;
// let componentsService = { findAll: () => ['test'] };
// const MIURL = 'http://localhost:3000/components';

// describe('GET Components', () => {
//   beforeAll(async () => {
//     const moduleRef = await Test.createTestingModule({
//       providers: [
//         { provide: ComponentsService, useFactory: mockComponentsService },
//       ],
//     }).compile();

//     app = moduleRef.createNestApplication();
//     await app.init();
//   });

//   it(`/GET components`, () => {
//     console.log(request(app.getHttpServer()).get('/components').expect(404));
//     return request(app.getHttpServer()).get('/components').expect(404);
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });

// VERSION 2

let app: INestApplication;
let componentsService = { findAll: () => ['test'] };
const MIURL = {
  url: 'http://localhost:3000/components',
  method: 'GET',
};

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    providers: [
      { provide: ComponentsService, useFactory: mockComponentsService },
    ],
  }).compile();

  app = moduleRef.createNestApplication();
  await app.init();
});

describe('GET Components', () => {
  test(`/GET components`, async () => {
    // console.log(request(app.getHttpServer()).get(MIURL).expect(404));
    // return request(app.getHttpServer()).get(MIURL).expect(404);
    const response = await app.use({
      method: MIURL.method,
      url: MIURL.url,
    });
    expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});

// VERSION 3
/*
// Import external modules
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

beforeAll(async () => {
  //NADA
});

describe('Schemes test', () => {
  test('GET /components', async () => {
    const app = await NestFactory.create(AppModule);
    const response = await request(app).get('/components');
    expect(response.statusCode).toBe(200);
  });
});
*/
