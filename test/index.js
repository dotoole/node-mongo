var expect = require('expect.js'),
    assert = require('assert'),
    testServer = require('..');

describe('test-server', function() {
    it('should say hello', function(done) {
        expect(testServer.hello()).to.equal('Hello, world');
        done();
    });

    it('should connect to mongodb', function(done) {
        testServer.getDbVersion().then(function(message) {
            expect(message).to.equal('Hello');
            done();
        }, function(err) {
            console.error(err);
            done();
        });

    });
});
