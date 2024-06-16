// task-6.js

// Оголошення функції findProduct, яка приймає два параметри: products і productName
function findProduct(products, productName) {
  // Перебір масиву products
  for (const product of products) {
    // Перевірка, чи ім'я продукту співпадає з productName
    if (product.name === productName) {
      // Повернення знайденого об'єкта продукту
      return product;
    }
  }

  // Якщо продукт не знайдено, повертається повідомлення
  return "Product not found!";
}

// Перевірка роботи функції
const products = [
  { name: 'Laptop', price: 1500 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 600 }
];

console.log(findProduct(products, 'Smartphone')); 
// { name: 'Smartphone', price: 800 }

console.log(findProduct(products, 'Monitor'));
// "Product not found!"
