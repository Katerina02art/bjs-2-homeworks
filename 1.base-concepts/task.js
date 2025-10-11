"use strict";
function solveEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return []; // нет корней
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root]; // один корень
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2]; // два корня
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем процентную ставку
  const monthlyPercent = percent / 100 / 12;

  // Тело кредита (основной долг)
  const loanBody = amount - contribution;

  // Если кредит не нужен (взнос покрывает всю сумму)
  if (loanBody <= 0) {
    return 0;
  }

  // Ежемесячный платеж по формуле аннуитета
  const monthlyPayment =
    (loanBody * (monthlyPercent * Math.pow(1 + monthlyPercent, countMonths))) /
    (Math.pow(1 + monthlyPercent, countMonths) - 1);

  // Общая сумма, которую заплатит клиент (включая проценты)
  const totalAmount = monthlyPayment * countMonths;

  // Округляем до 2 знаков
  return Number(totalAmount.toFixed(2));
}

// Проверка конкретного кейса
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
