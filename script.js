function q1() {
    let numbers = "";
    for (let i = 10; i <= 20; i++) {
        numbers += i + ",";
    }
    console.log(numbers);
}

function q2() {
    for (let i = 10; i <= 20; i++) {
        console.log(i * i);
    }
}

function q3() {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " * 7 = " + i * 7);
    }
}

function q4() {
    let sum = 0;
    for (let i = 1; i <= 15; i++) {
        sum += i;
    }
    console.log("Сума: " + sum);
}

function q5() {
    let sum = 1;
    for (let i = 15; i <= 35; i++) {
        sum *= i;
    }
    console.log("Добуток: " + sum);
}

function q6() {
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= 500; i++) {
        count++;
        sum += i;
    }
    const average = sum / count;
    console.log("Середнє арифметичне: " + average);
}

function q7() {
    let sum = 0;
    for (let i = 30; i <= 80; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log("Сума парних чисел: " + sum);
}

function q8() {
    for (let i = 100; i <= 200; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function q9(number) {
    console.log("Дільники числа " + number + ":");
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}

function q10(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            sum++;
        }
    }
    console.log("Кількість парних дільників: " + sum);
}

function q11(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            sum += i;
        }
    }
    console.log("Сума парних дільників: " + sum);
}

function q12() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + " * " + j + " = " + i * j);
        }
    }
}
