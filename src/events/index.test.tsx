import { getRandomInteger } from '.'

describe('Data Privider', () => {
  it('get random integer', () => {
    const randomInteger = getRandomInteger(100, 999)
    expect(randomInteger).toBeDefined()
  });

  it('random integer max limit', () => {
    const randomInteger = getRandomInteger(10, 100)
    expect(randomInteger).toBeLessThanOrEqual(100)
  });

  it('random integer min limit', () => {
    const randomInteger = getRandomInteger(10, 100)
    expect(randomInteger).toBeGreaterThanOrEqual(10)
  });

  it('random integer error', () => {
    // @ts-ignore
    const randomInteger = getRandomInteger('not number', '20')
    expect(randomInteger).toBeNaN()
  });
})
