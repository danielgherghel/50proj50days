if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is true');
}

const x = 10
const y = 5

if (x >= y) {
    console.log(`Const ${x} is greater then or equal to ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}


if (x !== y) {
    const z = 20;
    // let z = 20
    // var is not block level scoped
    // var z = 20
    console.log(`${z} is 20`);
}

// Shorthand If
if (x >= y) console.log(`${x} is greater or equal to ${y}`);

// if we want to use else we put else after the semicolon
if (x >= y) console.log(`${x} is greater or equal to ${y}`);
else console.log(`${x} is smaller then ${y}`);

// if we want to use multiple lines

if (x >= y) console.log(`${x} is greater or equal to ${y}`),
    console.log('This is true');
else console.log(`${x} is smaller then ${y}`);
