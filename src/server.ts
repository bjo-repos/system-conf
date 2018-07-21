// const express = require('express');

import express from 'express';

const app = express();
const router = express.Router();

router.get('/', function (req, res) {
  res.json({message: 'Welcome to System Conf API'});
})

// all routes will be prefixed with /api
// app.use('/api', router);
app.use('/api', router);

app.listen(3000, function () {
  console.log('Listening on port 3000');
})
