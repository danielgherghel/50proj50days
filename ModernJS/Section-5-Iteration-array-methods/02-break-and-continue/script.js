// const table = ['item1', 'item2', 'item3', 'item4']

// for (i = 0; i < table.length; i++) {
//     if (table[i] === 'item2') {
//         console.log(table[i] + ' is the most precious');
//     } else {
//         console.log(table[i]);
//     }
// }


// break

// for (let i = 0; i <= 20; i++) {
//     if (i === 15) {
//         console.log('Found the number ' + i);
//         break
//     }
//     console.log(i);
// }


// Continue
// can skip the rest of the code in the current iteration and continue to the next iteration

for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Skipping 15');
        continue
    }
    console.log(i);
}
