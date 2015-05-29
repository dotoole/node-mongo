# test-server

test nodejs backend

[![build status](https://secure.travis-ci.org/dotoole/test-server.png)](http://travis-ci.org/dotoole/test-server)

## Installation

This module is installed via npm:

``` bash
$ npm install test-server
```

## Example Usage

``` js
var testServer = require('test-server');
```

## setup for mongoDB

docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="admin" tutum/mongodb:3.0
mongo admin -u admin -p admin

use testdb
db.message.insert({"message":"Hello"})
db.createUser({user: "demo", pwd: "demo", roles: [{role:"readWrite", db:"testdb"}]})
