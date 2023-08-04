const express = require('express');
const router = express.Router();

const CarControllers = require('./controllers/CarControllers');
const { default_type } = require('mime');

module.exports = { router };
