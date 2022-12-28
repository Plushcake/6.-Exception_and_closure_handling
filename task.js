//Задача 1.
function parseCount(number) {
  const base = 10;
  const parsed = Number.parseInt(number, base);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}
function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}
//Задача 2.
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (b + c < a || a + c < b || b + a < c) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    const p = this.getPerimeter() / 2;
    return +Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
  }
}
function getTriangle(a, b, c) {
  try {
    return Triangle(a, b, c);
  } catch (errorGetTriangle) {
    getPerimeter: function() {
      return "«Ошибка! Треугольник не существует»";
    }
    getArea: function() {
      return "«Ошибка! Треугольник не существует»";
    }
  }
}
