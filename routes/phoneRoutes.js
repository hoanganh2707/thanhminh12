const express = require('express');
const { getPhones, addPhone } = require('../models/phoneModel');
const router = express.Router();

// Trang chủ hiển thị danh sách điện thoại
router.get('/', async (req, res) => {
  try {
    const phones = await getPhones();
    res.render('index', { phones });
  } catch (err) {
    res.status(500).send('Error retrieving phones');
  }
});

// Thêm điện thoại mới (thí dụ)
router.post('/add', async (req, res) => {
  const { name, description, price, image_url } = req.body;
  await addPhone(name, description, price, image_url);
  res.redirect('/');
});

module.exports = router;
