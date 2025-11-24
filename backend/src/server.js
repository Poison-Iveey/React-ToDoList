require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const todos = require('./routes/todos');
const logger = require('./utils/logger');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use('/api/todos', todos);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/todo_db';

mongoose.connect(MONGO_URI)
  .then(() => logger.info('MongoDB connected'))
  .catch(err => {
    logger.error('MongoDB connection error', err);
    process.exit(1);
  });

app.listen(PORT, () => logger.info(`Backend running on port ${PORT}`));
