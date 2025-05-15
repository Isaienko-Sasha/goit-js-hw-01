// Оголошення функції
function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}

// Виклики функції з виведенням результатів у консоль
console.log(Number (getElementWidth ("50px", "8px", "4px"))); // 74
console.log(Number (getElementWidth ("60px", "12px", "8.5px"))); // 101
console.log(Number (getElementWidth ("200px", "0px", "0px"))); // 200
