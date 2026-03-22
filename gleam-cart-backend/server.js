const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

mongoose.connect(process.env.MONGO_URI)
  .then(function() {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, function() {
      console.log('Server running on port ' + process.env.PORT);
    });
  })
  .catch(function(err) {
    console.log(err);
  });