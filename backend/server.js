const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
// JWT Authentication Codes
app.use('/api/users', require('./routes/userRoutes'));


app.use(errorHandler);

// move to goalroutes.js
// app.get('/api/goals', (req, res) => {res.json({message: 'Get Goals'})})

app.listen(port,  () => console.log(` Server started on port ${port}`))


