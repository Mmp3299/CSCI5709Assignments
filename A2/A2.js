const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'a2db-instance-1.ctdpcu9u6mkz.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Mrunal@3',
    database: 'a2db',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.post('/store-products', (req, res) => {
    const products = req.body.products;
    const values = products.map(product => [product.name, product.price, product.availability]);

    const sql = "INSERT INTO products (name, price, availability) VALUES ?";
    db.query(sql, [values], (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({ message: "Success." });
        }
    });
});

app.get('/list-products', (req, res) => {
    db.query("SELECT * FROM products", (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({ products: results });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
