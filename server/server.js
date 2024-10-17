// require modules
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { cheeses } = require('./cheeses')

// server set up
const port = 5000
const app = express();
app.use(logger('dev'))
app.use(cors());

// swagger options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Cheese API for PZ Cheeseria POC',
            version: '0.0.1',
            description: 'API for PZ Cheeses',
        },
    },
    apis: ['server.js'],
};

// set up the swagger router
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /cheeses:
 *  get:
 *    summary: Get all cheeses data
 *    description: Retrieve the list of cheeses
 *    responses:
 *      200:
 *        description: Success
 */
app.get('/cheeses', (req, res) => {
    res.json(cheeses);
});

/**
 * @swagger
 * /cheese/{id}:
 *   get:
 *     summary: Get cheese by ID
 *     description: Retrieve a specific cheese by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the cheese to retrieve
 *     responses:
 *       200:
 *         description: Cheese Object found
 *       404:
 *         description: Cheese with id not found
 */
app.get('/cheese/:id', (req, res) => {     // this is not used in the app, but maybr useful in the future
    const id = Number(req.params.id);
    const cheese = cheeses.find( item => item.id === id )
    if (cheese) {
        res.status(200).json(cheese)
    } else {
        res.status(404).json({ message: `Cheese id:${id} not found.` })
    }
})

app.use('/', (req, res) => {
    res.json(`Welcome! Please visit this link to see the swagger: http://localhost:${port}/api-docs`)
})

// listen the port
app.listen(port, () => {
    console.log(`Backend: The server runs on port:${port}`);
});
