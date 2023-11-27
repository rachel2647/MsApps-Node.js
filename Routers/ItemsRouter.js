// Importing required packages and modules
import express from 'express';
import ItemsController from '../Controllers/ItemsController.js';

// Creating an express router
const ItemsRouter = express.Router();

// Route for getting items with pagination
ItemsRouter.get("/", ItemsController.getItems);

// Route for getting items sorted by property name
ItemsRouter.get("/sort", ItemsController.getItemsSotedByPropertyName);

// Export the ItemsRouter as the default export
export default ItemsRouter;