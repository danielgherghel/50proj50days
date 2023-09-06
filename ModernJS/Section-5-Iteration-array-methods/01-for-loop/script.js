// foor loop syntax

// for ([initialExpression]; [conditionalExpression]; [incrementExpression])
//     statement;

// INITIAL EXPRESSION - initializes a variable/counter
// CONDITIONAL EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run.
// To execute a `block` of code, use the `{}` syntax



// for (let i = 0; i <= 10; i++) {
//     console.log('Number ' + i);
// }

// for (let i = 12; i >= 1; i--) {
//     console.log('The number is: ' + i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 7) {
//         console.log(i + ' is my lucky number');
//     } else {

//     }
//     console.log('Number ' + i);
// }



// for (let i = 0; i <= 10; i++) {
//     if (i === 7) {
//         console.log(i + ' is my lucky number');
//     } else {
//         console.log('Number ' + i);
//     }

// }

// Nested loops
// can't use i twice in a nested loop
// for (let i = 1; i <= 10; i++) {
//     console.log('Number ' + i);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// for (let i = 2; i <= 101; i++) {
//     console.log('Object is: ' + i);

//     for (let g = 3; g <= 12; g++) {
//         // console.log('Object 2 is: ' + g);
//         console.log(`${i} * ${g} = ${i * g}`);
//     }
// }

// Loop through an array

// const names = ['Brad', 'Sam', 'Legolas', 'Gimly', 'Aragorn', 'Gandalf']

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

const bestServedColdCharacters = [
    "Monza Murcatto",
    "Caul Shivers",
    "Nicomo Cosca",
    "Morveer",
    "Day",
    "Grand Duke Orso",
    'Logen Ninefingers'

];

// for (let i = 0; i <= bestServedColdCharacters.length; i++) {
//     // console.log(bestServedColdCharacters[6] + ' Is the best');
//     if (i === 6) {
//         console.log(bestServedColdCharacters[i] + ' is the best');
//     } else {
//         console.log(bestServedColdCharacters[i]);
//     }

// }

for (let i = 0; i <= bestServedColdCharacters.length; i++) {
    // console.log(bestServedColdCharacters[6] + ' Is the best');
    if (bestServedColdCharacters[i] === 'Caul Shivers') {
        console.log(bestServedColdCharacters[i] + ' is the best');
    } else {
        console.log(bestServedColdCharacters[i]);
    }

}




