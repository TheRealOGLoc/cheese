const request = require('supertest');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const { cheeses } = require('./cheeses');

// Mock app setup similar to the original server
const app = express();
app.use(logger('dev'));
app.use(cors());

app.get('/cheeses', (req, res) => {
    res.json(cheeses);
});

app.get('/cheese/:id', (req, res) => {
    const id = Number(req.params.id);
    const cheese = cheeses.find(item => item.id === id);
    if (cheese) {
        res.status(200).json(cheese);
    } else {
        res.status(404).json({ message: `Cheese id:${id} not found.` });
    }
});

describe('Cheese API Tests', () => {
    test('GET /cheeses - should return all cheeses', async () => {
        const response = await request(app).get('/cheeses');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(cheeses);
    });

    test('GET /cheese/:id - should return a specific cheese when found', async () => {
        const cheeseId = cheeses[0].id;
        const response = await request(app).get(`/cheese/${cheeseId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(cheeses[0]);
    });

    test('GET /cheese/:id - should return 404 when cheese is not found', async () => {
        const response = await request(app).get('/cheese/9999');
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ message: 'Cheese id:9999 not found.' });
    });
});
