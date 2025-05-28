const product = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

// destructuring 
// const { getFullName, productType } = require('./services/products');
// only import what you need

(async function main() {
    console.log('Ola');
    product.getFullName('505', 'Notepad');
    product.getProductLabel('Smartphone');

    console.log('Version: ' + config.version);
})();