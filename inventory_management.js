// 1. Create an inventory array of product objects (sampleData)
const inventory = [
    { name: 'Desktop', price: 1300, quantity: 30, lowStockLevel: 3 },
    { name: 'Curved Monitor', price: 900, quantity: 20, lowStockLevel: 2 },
    { name: 'Tablet', price: 500, quantity: 1, lowStockLevel: 3 },
    { name: 'Headset', price: 300, quantity: 15, lowStockLevel: 5 },
    { name: 'Keyboard', price: 250, quantity: 2, lowStockLevel: 3 }
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
    if (leftOver <= 0){
        return `${inventory.name}: Not In Stock`;
    } else if (leftOver <= inventory.lowStockLevel){
        return `${inventory.name}: Low in Stock`
    } else {
        return `${inventory.name}: In Stock`;
    }
}

//4. Create a Function to Check Low Stock Products
function checkLowStock(inventory){
    inventory.forEach(product => {
        if (product.lowStockLevel >= product.quantity){
            console.log(`Low Stocks of ${product.name}s`);
        }
    });
}

