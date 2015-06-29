jest.dontMock('../src/135-single-number.js');

describe('Single Number', function() {
    var singleNumber = require('../135-single-number/135-single-number.js');
    it('[1,1,2]', function() {
        expect(singleNumber([1,1,2])).toBe(2);
    });
    it('[0,0,1,2,1]', function() {
        expect(singleNumber([0,0,1,2,1])).toBe(2);
    });
});