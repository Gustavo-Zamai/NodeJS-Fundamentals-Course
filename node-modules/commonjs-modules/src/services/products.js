// all functions to handle with products

const productType = {
    version: 'digital',
    tax: 'x1',
};

// hidden const (member)
const apiURL = {
    url: 'www.google.com/api',
};

async function getFullName(codeId, productName) {
    
    console.log('Product: ' + codeId + '---' + productName);
    await doBreakLine();
}

// hidden function (member)
async function doBreakLine() {
    console.log('\n');
}

async function getProductLabel(productName) {
    console.log('Product: ' + productName)
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};
