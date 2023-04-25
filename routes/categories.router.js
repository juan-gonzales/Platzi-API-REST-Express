const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Product Name',
    price: 100,
  });
});

module.exports = router;
