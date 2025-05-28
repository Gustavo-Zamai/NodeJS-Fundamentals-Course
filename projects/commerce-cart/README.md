# 🛒 Commerce Cart

A simple shopping cart and wishlist manager built with modern JavaScript (ES Modules). This project simulates basic operations such as adding, removing, and listing products in a shopping cart and wishlist.

## 📦 Features

### Shopping Cart (`myCart`)
- ✅ Add item to the cart
- ✅ Remove one unit of an item (or delete it if it's the last)
- ✅ Delete item by name
- ✅ Delete item by index
- ✅ Display all items in the cart
- ✅ Calculate total price

### Wishlist (`myWishList`)
- ✅ Add items to the wishlist
- ✅ Display wishlist items

### Products
- ✅ Automatically calculate subtotal (`price × quantity`)

## 🧰 Technologies Used

- JavaScript (ES Modules)
- Node.js (run via terminal)

## ▶️ How to Run

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/commerce-cart.git
cd commerce-cart
```
Run with Node.js (version 14+ recommended):

```bash
node index.js
```
#### ⚠️ Make sure the package.json includes "type": "module" to enable import/export.

## 📂 Project Structure
```bash
commerce-cart/
├── index.js                 # Main file (entry point)
├── services/
│   ├── item.js              # Function to create items
│   └── cart.js              # Cart and wishlist module
├── package.json
```

## 📈 Sample Output
```bash
Welcome User, this is your actual chart:

My Chart List:

My Wishlist:
1. Keyboard Red Dragon - $ 239.99
2. Mouse Wireless - $ 156.55

Your chart total is:
$ Total: 0
```

## 📝 License
This project is licensed under the ISC License.

## 🚀 Potential Improvements
Here are a few ideas for improving the project:

- 🧪 Add unit tests using Jest or another test framework

- 💾 Persist cart and wishlist using local storage or a database

- 🌐 Create a simple web interface (HTML/CSS/JS) to interact with the cart

- 📦 Add product IDs and categories for better item management

- 🚧 Improve error handling and validation for inputs

- 📊 Format prices using Intl.NumberFormat for better display

- ⚙️ Create a class-based version with OOP principles

- 🔄 Implement item update (e.g., change quantity directly)