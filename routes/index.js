const {Router} = require('express')
const route = Router();
const indexCtrl = require('../controllers/index')

route.get('/', indexCtrl.index)

module.exports = route