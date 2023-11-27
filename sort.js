// Sorting function that sorts objects based on a given property name
const sortByProperty = (propertyName) => {
    return (a, b) => {
        // Compare the values of the given property for objects a and b
        if (a[propertyName] < b[propertyName]) {
            return -1; // a should be sorted before b
        }

        if (a[propertyName] > b[propertyName]) {
            return 1; // b should be sorted before a
        }

        return 0; // a and b are equal in terms of the given property
    };
};

// Export the sortByProperty function as the default export
export default sortByProperty;