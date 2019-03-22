import { list, get } from '../products';
import { xhr } from '../net';

global.useMock = (process.env.USE_MOCK === 'true');
global.fetch = global.useMock ? require('jest-fetch-mock') : require('node-fetch');

describe('Test products SDK', () => {
  it('Get a specific product', (done) => {
    expect.assertions(1);
    get('38d99946-08b0-4cb2-adc2-7ceb3e1c0725').then((product) => {
      expect(product).toBeInstanceOf(Object)
      done();
    })
  })
  
  it('List products', (done) => {
    expect.assertions(1);
    list({ text: 'camisolas', asc: true }).then((products) => {
      expect(products).toBeInstanceOf(Object)
      done();
    }).catch((ex) => {
      expect(ex.message).toBe("400");
      done();
    });
  })
});
