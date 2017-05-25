var assert = require('assert');
var snLog = require('../distribution/index');
var correct_api='CMagAnLtRY2S0s5uWm4U';
var incorrect_api='skjdfhlusdfoiuhwljfdsh';

describe('making log api call', function() {
  it('should return error when the invalid API key is send', function() {
    new snLog(incorrect_api).log('sample_group', 'sample msg', null, function(err, resp){
      assert.equal(null, resp);
    });
  });

  it('should return error null if we pass correct params', function(){
    new snLog(correct_api).log('error', 'this is testing sample message sample msg', null, function(err, resp){
      assert.equal(null, err);
    });
  })
});