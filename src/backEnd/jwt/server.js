/* eslint-disable class-methods-use-this */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const AppDir = path.resolve(__dirname);
// console.log('path:', AppDir);

const jwt = require('jsonwebtoken');
// const config = require('./config');
const privateKey = fs.readFileSync(`${AppDir}/keys/private.key`, 'utf8');
// const expiresIn = '1h';
const signOptions = {
  expiresIn: '1h',
  algorithm: 'RS256'
};
const middleware = require('./middleware');

class HandleGenerator {
  login(req, res) {
    console.log('req.headers', req.headers);
    console.log('req.body.data', req.body.data);
    console.log('req.body', req.body.username, req.body.password);
    console.log('res1');
    const username = req.body.username.trim();
    const password = req.body.password.trim();

    // fetch from the database

    const mockedUsername = 'admin';
    const mockedPassword = 'password';
    console.log('res2');

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        console.log('res3');

        const token = jwt.sign({ username }, privateKey, signOptions);
        console.log('res4 Authentication succesful!');

        res.json({
          success: true,
          message: 'Authentication succesful!',
          token
        });
      } else {
        console.log('res5');
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      console.log('res6');
      res.send(400).json({
        success: false,
        message: 'Authentication failed! please check the request'
      });
    }
  }

  index(req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}

function main() {
  const app = express();
  const handlers = new HandleGenerator();
  const port = process.env.PORT || 8000;
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  app.post('/login', handlers.login);
  app.get('/', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`server is listenting on port: ${port}`));
}

main();
