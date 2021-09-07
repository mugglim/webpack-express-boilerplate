# webpack-express-boilerplate

webpack, express, mysql의 환경설정을 적용한 boilerplate입니다.

## Setup
1. git clone
> git clone https://github.com/mugglim/webpack-express-boilerplate
2. npm install
> npm install
3. config db.config.js(mysql)
```js
export default {
    host: 'localhost',
    user: 'root',
    password: 'passwd',
    database: 'my_db',
};
```
4. run app.js
> npm run start
5. navigate to http://localhost:3000

## Stack
- loader
  - css-loader
  - sass-loader
  - babel-loader
- plugin
  - mini-css-extract-plugin
  - html-webpack-plugin
- middleware
  - webpack-dev-middleware
  - webpack-hot-middleware
  