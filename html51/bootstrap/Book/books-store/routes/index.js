var express = require('express');
var router = express.Router();
var book = require('../models/book')
    /* GET home page. */
router.get('/', function(req, res, next) {
    let books = [];
    let count = 0;
    while (count < 5) {
        books.push(new book)
        count++;
    }
    res.render('index', { title: 'Express', books: books });
});

module.exports = router;