// Import external modules

import bootstrap from '../src/main';

// Mocks
//import { requestScheme, responseScheme } from '../mocks/index';
const HighlightRoute = {
  url: '/products',
  method: 'GET',
};
const app = bootstrap();

beforeAll(async () => {
  //const app = await bootstrap();
});

describe('Schemes test', () => {
  test('GET /products', async () => {
    /*   jest.setTimeout(10000);
    const response = await app.inject({
      method: HighlightRoute.method,
      url: `${HighlightRoute.url}`,
    });
    //  const responseParsed = JSON.parse(response.body);
    */
    get('/products');
    expect(200);
    //    expect(responseParsed).toBeDefined();
  });
  /*
  test('GET /v1/contents/301653760800 200', async () => {
    const response = await app.inject({
      method: HighlightRoute.method,
      url: `${HighlightRoute.url}/${contentId}`,
      query: requestScheme.successCase,
      headers,
    });
    const responseParsed = JSON.parse(response.body);
    expect(response.statusCode).toBe(200);
    expect(responseParsed).toBeDefined();
    expect(Object.keys(responseParsed.stripes[0])).toEqual([
      'name',
      'contents',
    ]);
  });
  test('GET /v1/contents/301653760800 401 invalid token', async () => {
    const response = await app.inject({
      method: HighlightRoute.method,
      url: `${HighlightRoute.url}/${contentId}`,
      headers: {
        Authorization: 'Bearer scasndbjabdjhasbdhjasbjhnaksbdkjabhjda',
      },
      query: requestScheme.successCase,
    });
    expect(response.statusCode).toBe(401);
    expect(response.body).toMatch(/Unauthorized/);
  });
  */
});
