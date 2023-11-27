// Importing required packages
import express from 'express';
import cors from 'cors';

// Importing the ItemsRouter
import ItemsRouter from './Routers/ItemsRouter.js';

// Creating an instance of the Express app
const app = express();

// Setting the port
const port = 8080;

// Using CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Routing for '/items' path is handled by the ItemsRouter
app.use('/items', ItemsRouter);

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});