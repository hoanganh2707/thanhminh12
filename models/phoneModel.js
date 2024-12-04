const pool = require('../config/dbConfig');

// Lấy danh sách điện thoại
const getPhones = async () => {
  const res = await pool.query('SELECT * FROM phones');
  return res.rows;
};

// Thêm điện thoại mới
const addPhone = async (name, description, price, image_url) => {
  const query = 'INSERT INTO phones (name, description, price, image_url) VALUES ($1, $2, $3, $4)';
  await pool.query(query, [name, description, price, image_url]);
};

module.exports = { getPhones, addPhone };
