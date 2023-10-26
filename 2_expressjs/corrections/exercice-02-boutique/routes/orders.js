import express from 'express';

const orders = express.Router();

// GET all orders
orders.get('/', (req, res) => {

});

// GET one order by id
orders.get('/:id', (req, res) => {
    
});

// CREATE one order
orders.post('/', (req, res) => {
    
});

export default orders;