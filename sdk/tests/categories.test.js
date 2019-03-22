import { list, get, getSubCategories } from '../categories';
import { xhr } from '../net';

global.useMock = (process.env.USE_MOCK === 'true');
global.fetch = global.useMock ? require('jest-fetch-mock') : require('node-fetch');

describe('Test categories SDK', () => {
  it('Get a specific category by id', (done) => {
    expect.assertions(1);
    get('').then((res) => {
      expect(res).toBeInstanceOf(Array);
      done();
    });
  });

  it('Get sub categories of given category id', (done) => {
    expect.assertions(1);
    getSubCategories('').then((object) => {
      expect(object).toBeInstanceOf(Object);
      done();
    }).catch((ex) => {
      expect(ex.message).toBe("404");
      done();
    })
  })
  
  it('List categories', (done) => {
    expect.assertions(1);
    list({}, 1).then((object) => {
      expect(object).toBeInstanceOf(Object)
      done();
    })
  })
});
