// Importing required packages and modules
import axios from "axios";
import sortByProperty from "../sort.js";

// ItemsController object to handle item-related operations
const ItemsController = {

    // Get items with pagination
    getItems: async (req, res) => {
        const category = req.query.category;
        const page = parseInt(req.query.page);
        const pageSize = 9;

        // Make a request to the Pixabay API to get items data
        const response = await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`);

        if (response.status === 200) {
            const itemsData = response.data.hits;

            // Calculate the start and end indexes for the requested page
            const startIndex = (page - 1) * pageSize;
            const endIndex = page * pageSize;

            // Slice the items array based on the indexes
            const paginatedItems = itemsData?.slice(startIndex, endIndex);

            // Calculate the total number of pages
            const totalPages = Math.ceil(itemsData.length / pageSize);

            // Send the paginated items and total pages as the API response
            res.json({ items: paginatedItems, totalPages });
        }
        else {
            req.send(response.statusText);
            console.log("An error occurred");
        }
    },

    // Get items sorted by a given property name
    getItemsSotedByPropertyName: async (req, res) => {
        const category = req.query.category;
        const propertyName = req.query.propName;

        // Make a request to the Pixabay API to get items data
        const response = await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`);

        if (response.status === 200) {
            const itemsData = response.data.hits;

            // Sort the items data based on the given property name
            const sortedItems = itemsData.sort(sortByProperty(propertyName));

            // Send the sorted items as the API response
            res.send(sortedItems);
        }
        else {
            req.send(response.statusText);
            console.log("An error occurred");
        }
    }
}

// Export the ItemsController object as the default export
export default ItemsController;
