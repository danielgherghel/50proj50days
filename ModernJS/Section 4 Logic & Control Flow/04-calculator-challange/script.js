function calculator(num1, num2, operator) {
    let result;
    if (operator === '+') {
        return result = num1 + num2
    } else if (operator === '-') {
        return result = num1 - num2
    } else if (operator === '*') {
        return result = num1 * num2
    } else if (operator === '/') {
        return result = num1 / num2
    } else {
        return result = 'Error message'
    }
}

console.log(calculator(1, 2, '+'));
console.log(calculator(10, 1, '-'));
console.log(calculator(10, 1, '*'));
console.log(calculator(10, 1, '/'));
console.log(calculator(10, 1, 'a'));

function swCalc(n1, n2, oper) {
    let result;

    switch (oper) {
        case '+':
            result = n1 + n2
            break;
        case '-':
            result = n1 - n2
            break;
        case '*':
            result = n1 * n2
            break;
        case '/':
            result = n1 / n2
            break;
        default:
            result = 'Invalid operator'
            break

    }
    console.log(result);
    return result
}

swCalc(1, 2, '+')
swCalc(10, 2, '-')
swCalc(8, 2, '+')
swCalc(8, 2, '/')
swCalc(1, 2, 'was')




