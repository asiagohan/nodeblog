const chai = require('chai');
const should = chai.should();

describe('config load', function() {
  describe('#test for config loading', function(){
    it('should return develeopment when config loaded with no parameter', function() {
      let config = require('../config')();
      config.env.should.equal('development');
    });
    it('should return staging when config loaded with staging', function() {
      let config = require('../config')('staging');
      config.env.should.equal('staging');
    });
    it('should return production when config loaded with production', function() {
      let config = require('../config')('production');
      config.env.should.equal('production');
    });
  });
});
