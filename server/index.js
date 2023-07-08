require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');
app.use(bodyParser.json());
app.use(cors());
/// Routes
app.use('/api', authRoutes);
app.use('/api', courseRoutes);

app.get('/ping', function (req, res) {
  return res.send('pong');
});

console.log('user');
// Connection
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch((e) => {
    console.log(e);
  });

app.get('/', (req, res) => {
  res.send('hello');
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
