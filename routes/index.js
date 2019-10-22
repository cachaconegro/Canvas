const express = require('express')
const route = express.Router();
const indexCtrl = require('../controllers/index')

route.get('/', indexCtrl.index)

module.exports = route