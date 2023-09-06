


// IIFE SYNTAX
// wrap the function in the parantesis
// the last () is to invoke the function
// this user is in the scope of the iife
(function () {
    const user = 'John';
    const hello = () => console.log('Hello from the IIFE');
    console.log(user);
    hello()
})();


// we can add parameters

(function (name) {
    console.log('Hello ' + name);
})('Andreas')


    // (function hello() {
    //     console.log('Hello');
    // })()


