// 1. Create an inventory array of product objects (sampleData)
const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 1, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
];

//2. Create a function to display product details
function displayProductDetails(inventory){
    return `Product Name: ${inventory.name}, Price: $${inventory.price}, Quantity: ${inventory.quantity} 
    Status: ${inventory.quantity >= inventory.lowStockLevel ? 'In Stock' : 'Low Stock'}`;

}
