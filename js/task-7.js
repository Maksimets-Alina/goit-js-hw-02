// task-7.js

// Оголошення функції calculateTotalPrice, яка приймає масив orders
function calculateTotalPrice(orders) {
  // Змінна для зберігання загальної вартості
  let totalPrice = 0;

  // Перебір масиву orders
  for (const order of orders) {
    // Додавання вартості кожного замовлення до загальної вартості
    totalPrice += order.price * order.quantity;
  }

  // Повернення загальної вартості
  return totalPrice;
}

// Перевірка роботи функції
const orders = [
  { product: 'Laptop', price: 1500, quantity: 2 },
  { product: 'Smartphone', price: 800, quantity: 3 },
  { product: 'Tablet', price: 600, quantity: 1 }
];

console.log(calculateTotalPrice(orders)); 
// 6100
