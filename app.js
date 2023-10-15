const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authVerifyMiddleware = require('./middlewares/authVerifyMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/student_register_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/students', require('./routes/students'));
app.use('/works', authVerifyMiddleware, require('./routes/works'));
app.use('/otp', require('./routes/otp'));
app.use('/products', require('./routes/products'));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
