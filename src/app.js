const express = require('express');
const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.router');
const categoriesRouter = require('./routes/categories.router');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

module.exports = app;
