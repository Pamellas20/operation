const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];

products.push({ name: "Desk", price: 150, category: "Furniture" });


const search = products.find(product => product.name === "Watch");
console.log("the product with name called watch is", search);

const productNames = products.map(product => product.name);
console.log("Names of our products are:", productNames);

const expensiveprod = products.filter(product => product.price > 100);
console.log("Products that cost more than $100:", expensiveprod);

products.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
});

const totalCost = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Cost of All Products is:", totalCost);

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    
    products.forEach(product => {
        const productItem = document.createElement("p");
        productItem.textContent = `Product: ${product.name}, Price: $${product.price}`;
        productList.appendChild(productItem);
    });
});
