const { res } = require('express')
const express = require('express')
const router = express.Router();
const {get, post} = require('../controllers/controller')

router.post('/', post);

router.get('/', get)

module.exports = router;