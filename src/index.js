const targetFunction = (x) => Math.pow(x, 2) - Math.cos(x);

function LeftIntegrate(func, a, b, n = 1000) {
    const deltaX = (b - a) / n;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += func(a + i * deltaX);
    }

    return sum * deltaX;
}

const inputA = prompt("a = ");
const inputB = prompt("b = ");
const n = parseInt(prompt("Введите количество точек интегрирования "));

const a = parseFloat(inputA);
const b = parseFloat(inputB);

if (!isNaN(a) && !isNaN(b) && n > 0) {
    const result = LeftIntegrate(targetFunction, a, b, n);
    alert(`Результат интегрирования от ${a} до ${b} при n = ${n} равен: ${result}`);
    console.log(`Результат интегрирования методом левых прямоугольников от ${a}...${b} при n = ${n} равен: ${result}`);
} else {
    alert("Введите допустимые параметры");
}
