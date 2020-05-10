const express = require('express');
const router = express.Router();
const { pool } =require('../modules/mysql-conn');

router.get('/list', (req, res, next)=>{
  const pugVals = {cssFile : 'board', jsFile : 'board'};
  res.render('board/list', pugVals);
})
router.get('/write', (req, res, next)=>{
  const pugVals = {cssFile : 'board', jsFile : 'board'};
  res.render('board/write', pugVals);
})

module.exports = router;