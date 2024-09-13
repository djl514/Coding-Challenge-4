// 1. Create an inventory array of product objects (sampleData)
const inventory = [
    { name: 'Curved Monitor', price: 900, quantity: 20, lowStockLevel: 2 },
    { name: 'Tablet', price: 500, quantity: 1, lowStockLevel: 3 },
    { name: 'Headset', price: 300, quantity: 15, lowStockLevel: 5 },
    { name: 'Keyboard', price: 250, quantity: 2, lowStockLevel: 3 }, 
    { name: 'Desktop', price: 1200, quantity: 30, lowStockLevel: 3 }
];

//2. Create a function to display product details
function displayProductDetails(inventory){
    inventory.forEach((product) => {
        let stats = product.quantity >= product.lowStockLevel ? 'In Stock' : 'Low Stock';
        console.log(`Product name: ${product.name}
        Product price: $${product.price}
        Product quantity: ${product.quantity}
        Product Status: ${stats}`);
    });
    
}

//calls the function
displayProductDetails(inventory);

//3. Create a Function to Update Product Stock after sales
function updateStock(inventory, unitsSold){
    let leftOver = inventory.quantity -= unitsSold;
    if (leftOver <= 0){
        console.log(`${inventory.name}: Not In Stock`);
    } else if (leftOver <= inventory.lowStockLevel){
        console.log(`${inventory.name}: Low in Stock`);
    } else {
        console.log(`${inventory.name}: In Stock`);
    }
}

//calls the function
//updateStock(inventory[0], 20);
//displayProductDetails(inventory); //the displayProductDetails function should be updated

//4. Create a Function to Check Low Stock Products
function checkLowStock(inventory){
    inventory.forEach((product) => {
        if (product.lowStockLevel >= product.quantity){
            console.log(`Low Stocks of ${product.name}s`);
        }
    });
}
checkLowStock(inventory);

//5. Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory){
    inventory.forEach((product) => {
        const itemValue = product.quantity*product.price;
        product.totalValue = itemValue;
        //adds in a new property for the total value into the inventory array
    });
    const sum = inventory.reduce((total, values) => total+values.totalValue,0);
    return `Total Inventory Value: $${sum}`;
}  

console.log(calculateInventoryValue(inventory));

//This function removes the added totalValue property in the array
function deleteTotalValue(inventory){
    inventory.forEach((product) => {
        delete product.totalValue;
    });
}

deleteTotalValue(inventory);
//console.log(inventory);

//6. Create a Funciton to Process a Sale

