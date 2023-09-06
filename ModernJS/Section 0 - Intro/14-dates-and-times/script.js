

let d;

d = new Date()

d = d.toDateString()

// set a specific date

d = new Date(1991, 7, 10)


// add a time to the date

d = new Date(1991, 7, 10, 12, 30)

// pass in a string / the month is counting from 1 in this case
d = new Date('2021-07-10')

// pass in the time as well in the string
d = new Date('2021-07-10T12:30:00')

d = new Date('07/10/2021 12:31:00')

// get the time stamp

d = Date.now()


d = new Date('07-10-2022 12:00:00')
d = d.getTime()
d = d.valueOf()


d = new Date(1657479600000)

d = Math.floor(Date.now() / 1000)

console.log(d, typeof d);