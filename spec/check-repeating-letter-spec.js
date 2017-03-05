require('should');
const checkRepeatingLetter = require('../src/check-repeating-letter');

describe('check repeating letter', () => {
  it('should return true if contains repeating letter', () => {
    const result = checkRepeatingLetter('abcdefa');

    result.should.equal(true);
  });

  it('should return false if contains repeating letter', () => {
    const result = checkRepeatingLetter('abcdefg');

    result.should.equal(false);
  });
});