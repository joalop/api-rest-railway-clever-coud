const express = require('express');
const router = express.Router();
const pool = require('../db')

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/data', async function(req, res, next) {
  const [rows] = await pool.query('SELECT * from users')


  res.json(rows)
});

router.get('/ping', async function(req, res, next) {
  const [result] = await pool.query('SELECT "Hello word" as RESULT')
  console.log(result[0])
  res.json(result)
});

router.get('/create', async function(req, res, next) {
  const result = await pool.query("insert into users(name) values('Selem');")
  res.json(result)
});

module.exports = router;
