
// challange 1
// function getCelsius(temp) {
//     return (temp - 32) * 5 / 9
// }



// as one line arrow function

const getCelsius = (temp) => (temp - 32) * 5 / 9

console.log(`The temperature is ${getCelsius(50)} \xB0C`);

// challange 2

function minMax(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    // console.log('min: ' + min + ' max: ' + max);

    return {
        min,
        max
    }
}


console.log(minMax([2, 3, 45, 4, 5, 8]));

// challange 3

((length, width) => {
    const area = length * width

    const output = `The area of a retangle with a length of ${length} and a width of ${width} is ${area}`
    console.log(output);
})(10, 5)



let x = 100
let y = 50
function getSum(n1, n2) {
    let sum = n1 + n2
    return sum
}

let sum1 = getSum(x, y)
let sum2 = getSum(10, 5)

console.log(`Sum 1 is: ${sum1}`);
console.log(`Sum 2 is: ${sum2}`);