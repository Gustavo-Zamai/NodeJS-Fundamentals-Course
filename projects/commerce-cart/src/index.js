/*  What user can do:
    - 

*/
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";


const myCart = [];
const myWishList = [];

console.log(`Welcome User, this is your actual chart:`);

// create items
const itemOne = await createItem("Pen Drive 16GB", 35.9, 4);
const itemTwo = await createItem("Mouse Wireless", 156.55, 3);
const itemThree = await createItem("Keyboard Red Dragon", 239.99, 1);

await cartService.addItem(myCart, itemOne);
await cartService.addItem(myCart, itemTwo);
//console.log(itemOne.subtotal());

// add to my wishlist
await cartService.addItem(myWishList, itemThree);
await cartService.addItem(myWishList, itemTwo);


await cartService.removeItem(myCart, itemOne);
await cartService.removeItem(myCart, itemTwo);
//await cartService.removeItem(myCart, itemTwo);
//await cartService.removeItem(myCart, itemTwo);
//await cartService.removeItemByIndex(myCart, 1);

await cartService.displayChart(myCart);

// display wishlist
await cartService.displayWishlist(myWishList);

// delete item from chart
//await cartService.deleteItem(myCart, itemTwo.name); 
//await cartService.deleteItem(myCart, itemOne.name);

await cartService.calculateTotal(myCart);
