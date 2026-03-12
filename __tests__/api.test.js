// setupTests.js
require('jest-fetch-mock').enableMocks();

describe('bikes api', () => {
    it('get bikes', async () => {
      const res = await fetch('api/bikes');
      expect(res.ok).toBe(true);
    })
    it('get bikes by id', async () => {
      const res = await fetch('api/bikes/by_types?id=1');
      expect(res.ok).toBe(true);
    })
})

describe('types api', () => {
  it('get types', async () => {
    const res = await fetch('api/types');
    expect(res.ok).toBe(true)
  })
})
