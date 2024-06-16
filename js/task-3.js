// task-3.js

// Оголошення функції checkForSpam, яка приймає параметр message
function checkForSpam(message) {
  // Приведення рядка до нижнього регістру для полегшення пошуку
  const normalizedMessage = message.toLowerCase();
  
  // Перевірка наявності заборонених слів у рядку
  if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')) {
    return true;
  }
  
  return false;
}

// Перевірка роботи функції
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
