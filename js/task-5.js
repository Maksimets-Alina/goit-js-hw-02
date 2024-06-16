// task-5.js

// Оголошення функції createOrder, яка приймає об'єкт order
function createOrder(order) {
  // Перевірка наявності всіх необхідних властивостей у об'єкті order
  if (!order.hasOwnProperty('product') || !order.hasOwnProperty('price') || !order.hasOwnProperty('quantity')) {
    return "Error: Missing properties!";
  }

  // Якщо всі властивості присутні, додається властивість status зі значенням 'completed'
  order.status = 'completed';

  // Повернення оновленого об'єкта order
  return order;
}

// Перевірка роботи функції
console.log(createOrder({ product: 'Droid', price: 3000, quantity: 2 })); 
// { product: 'Droid', price: 3000, quantity: 2, status: 'completed' }

console.log(createOrder({ product: 'Droid', quantity: 2 }));
// "Error: Missing properties!"

console.log(createOrder({ product: 'Droid', price: 3000 }));
// "Error: Missing properties!"
