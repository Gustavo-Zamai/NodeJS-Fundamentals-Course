/* cart features:
    - add item
    - delete item
    - increase number of items --> with add item
    - decrease number of items
    - calculate total
*/

async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((product) => product.name === item.name);
    
    if (indexFound == -1){
        console.log("Item not found");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    } 

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

async function removeItemByIndex(userCart, index) {
    const deleteIndex = index - 1;
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

async function calculateTotal(userCart) {
  console.log("\nYour chart total is:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`$ Total: ${result}`);
}

async function displayChart(userCart) {
  console.log("\nMy Chart List:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - $ ${item.price} | ${
        item.quantity
      }X | Subtotal: ${item.subtotal()}`
    );
  });
}

async function displayWishlist(userCart) {
  console.log("\nMy Wishlist:");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $ ${item.price}`);
  });
}

export {
  addItem,
  deleteItem,
  removeItem,
  removeItemByIndex,
  calculateTotal,
  displayChart,
  displayWishlist,
};
