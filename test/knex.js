const chai = require('chai');
const assert = chai.assert;
const Promise = require('bluebird');

describe('knex database connection', function() {
  describe('#test for knex database connection', function(){
    it('should connect development database', function() {
      const config = require('../config')();
      const knexconfig = require('../knexfile');
      const knex = require('knex')(knexconfig[config.env]);
      return knex.raw('SHOW TABLES').then(function(resp){
        assert.equal(resp[1][0].db, 'information_schema');
      });
    });
  });
});
