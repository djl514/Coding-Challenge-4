// 1. Create an inventory array of product objects (sampleData)
const inventory = [
    { name: 'Laptop', price: 1300, quantity: 30, lowStockLevel: 3 },
    { name: 'Smartphone', price: 900, quantity: 20, lowStockLevel: 2 },
    { name: 'Tablet', price: 500, quantity: 8, lowStockLevel: 3 },
    { name: 'Headphones', price: 300, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 12, lowStockLevel: 3 }
];

//2. Create a function to display product details
function displayProductDetails(inventory){
    return `Product Name: ${inventory.name}, 
    Price: $${inventory.price}, 
    Quantity: ${inventory.quantity} 
    Status: ${inventory.quantity >= inventory.lowStockLevel ? 'In Stock' : 'Low Stock'}`;
}

//3. Create a Function to Update Product Stock after sales
function updateStock(inventory, unitsSold){
    let leftOver = inventory.quantity -= unitsSold;
    if (leftOver > 0){
        return displayProductDetails(inventory);
    } else {
        return `${inventory.name} Not In Stock`;
    }
}

console.log(displayProductDetails(inventory[1]));
console.log(updateStock(inventory[1], 19));