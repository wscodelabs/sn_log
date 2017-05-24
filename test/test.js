var assert = require('assert');
var correct_api='CMagAnLtRY2S0s5uWm4U';
var incorrect_api='skjdfhlusdfoiuhwljfdsh';
describe('valid_api_Call', function() {
  describe('will_push', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});