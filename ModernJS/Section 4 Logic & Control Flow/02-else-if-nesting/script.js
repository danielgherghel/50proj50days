const d = new Date(10, 30, 2022, 20, 0, 0)
const hour = d.getHours()

// console.log(hour);

// if (hour < 12) {
//     console.log('Good morning');
// } else if (hour < 18) {
//     console.log('Good Afternoon');
// }
// else {
//     console.log('Good Night');
// }

// Nested If
if (hour < 12) {
    console.log('Good Morning');
    if (hour === 6) {
        console.log('Wake up!');
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
    if (hour >= 20) {
        console.log('zzzzzz');
    }
}

// multiple conditions in the if statements
// and
if (hour >= 7 && hour < 15) {
    console.log('It is work time');
}
// or operator
if (hour === 6 || hour === 20) {
    console.log('wash your face');
}

