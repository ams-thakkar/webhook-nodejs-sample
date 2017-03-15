'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const apiRoute = express();

apiRoute.use(bodyParser.urlencoded({
    extended: true
}));

apiRoute.use(bodyParser.json());
