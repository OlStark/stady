const multipliy = require('./scripy');

xdescribe("Test multipliy", () => {
  it('multiliy 1 to 0 equal 0', () => {
    const result = multipliy(1, 0);
    expect(result).toBe(0);
  }),
  it('multiliy 1 to 1 equal 1', () => {
    const result = multipliy(1, 1);
    expect(result).toBe(1);
  })
});