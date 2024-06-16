// task-8.js

// Оголошення функції updateOrderStatus, яка приймає два параметри: orders і productName
function updateOrderStatus(orders, productName) {
  // Перебір масиву orders
  for (const order of orders) {
    // Перевірка, чи ім'я продукту співпадає з productName
    if (order.product === productName) {
      // Оновлення статусу продукту
      order.status = 'delivered';
    }
  }

  // Повернення оновленого масиву orders
  return orders;
}

// Перевірка роботи функції
const ordersToUpdate = [
  { product: 'Laptop', price: 1500, quantity: 2, status: 'pending' },
  { product: 'Smartphone', price: 800, quantity: 3, status: 'pending' },
  { product: 'Tablet', price: 600, quantity: 1, status: 'pending' }
];

console.log(updateOrderStatus(ordersToUpdate, 'Smartphone'));
// [
//   { product: 'Laptop', price: 1500, quantity: 2, status: 'pending' },
//   { product: 'Smartphone', price: 800, quantity: 3, status: 'delivered' },
//   { product: 'Tablet', price: 600, quantity: 1, status: 'pending' }
// ]
