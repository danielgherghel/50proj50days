console.log(10 > 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 33 > 15);

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 30;

console.log(a);

// will now show as the posts are empty
const posts = []
posts.length > 0 && console.log(posts[0]);

// showing the objects
const posts2 = ['Post One', 'Post two']
posts2.length > 0 && console.log(posts2[0]);

// || or operator will return the first truthy value or the last value

let b;


b = 10 || 20
b = 0 || 20
b = 0 || null || '' || undefined


console.log(b);


// nullish coalescing operator (??) returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20
c = null ?? 20
c = 20 ?? null;
c = undefined ?? 30
c = 0 ?? 30


console.log(c);

