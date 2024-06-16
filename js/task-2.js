// task-2.js

// Оголошення функції formatMessage, яка приймає два параметри: message і maxLength
function formatMessage(message, maxLength) {
  // Перевірка, чи довжина рядка перевищує maxLength
  if (message.length <= maxLength) {
    // Якщо ні, повертається початковий рядок
    return message;
  } else {
    // Якщо так, рядок обрізається і до нього додаються три крапки
    return message.slice(0, maxLength) + "...";
  }
}

// Перевірка роботи функції
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
