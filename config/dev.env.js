'use strict'
const merge = require('webpack-merge')
const prod = require('./prod.env')

module.exports = merge(prod, {
  NODE_ENV: '"dev"',
  BaseUrl: '"http://127.0.0.1:8080"'
})
