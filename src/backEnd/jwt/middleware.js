/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
// const config = require('./config');

const AppDir = path.resolve(__dirname);
const publicKey = fs.readFileSync(`${AppDir}/keys/public.key`, 'utf8');

const signOptions = {
  expiresIn: '1h',
  algorithm: ['RS256']
};

const checkToken = (req, res, next) => {
  console.log('reqHeaders:', req.headers);
  let token = req.headers['x-access-token'] || req.headers.authorization;
  token = token.trim();

  // if(token.startsWith('Bearer ')) {
  token = token.slice(7, token.length);
  console.log('token:', token);

  // }
  console.log('token:', token);

  if (token) {
    jwt.verify(token, publicKey, signOptions, (err, decoded) => {
      console.log('error in receiving', err);
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken
};
