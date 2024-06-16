// task-1.js

// Оголошення функції makeTransaction, яка приймає три параметри: quantity, pricePerDroid, customerCredits
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // Розрахунок загальної вартості замовлення
  const totalPrice = quantity * pricePerDroid;

  // Перевірка, чи достатньо кредитів у клієнта
  if (totalPrice > customerCredits) {
    // Якщо недостатньо кредитів, повертається повідомлення про це
    return "Insufficient funds!";
  } else {
    // Якщо достатньо кредитів, повертається повідомлення про успішне замовлення
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

// Перевірка роботи функції
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
