const chai = require('chai');
const should = chai.should();
const supertest = require('supertest');
const express = require('express');
const app = require('../app');

describe('GET /users', function() {
  it('should return some users', function(done) {
    supertest(app)
      .get('/users')
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
