const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const phoneRoutes = require('./routes/phoneRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Cấu hình body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng routes
app.use('/', phoneRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
