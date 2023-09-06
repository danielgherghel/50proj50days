// challange 1

// const x = [1, 2, 3, 4, 5]


// arr = x.unshift(0)
// arr = x.push(6)
// arr = x.reverse()

// console.log(x);


// challange 2


// method 1
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]

const combArr = [...arr1, ...arr2]
const arr3 = [...new Set(combArr)]

console.log(arr3);

// using spread

const arr4 = [10, 12, 14, 15, 20, 54]
const arr5 = [12, 13, 15, 20, 21, 15, 25, 54]

const compreArr = [...arr4, ...arr5]

const arr6 = [...new Set(compreArr)]

console.log(arr6);



// with concat

const arr7 = [1, 5, 7, 10, 15, 21, 30, 40, 45]
const arr8 = [2, 3, 4, 7, 15, 23, 30, 41, 45, 48]

const arrCom = arr7.concat(arr8)

const arr9 = [...new Set(arrCom)]

console.log(arr9);