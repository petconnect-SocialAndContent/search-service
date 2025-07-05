const express = require('express');
const router = express.Router();
const controller = require('../controllers/searchController');

router.get('/', controller.search); // /search?query=perro
router.post('/index', controller.indexTestData); // carga un documento

module.exports = router;
