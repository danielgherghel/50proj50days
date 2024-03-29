

let x;

let d = new Date()



x = d.toString()

x = d.getTime()
x = d.valueOf()

x = d.getFullYear()
x = d.getMonth() + 1
x = d.getDay()

x = d.getHours()
x = d.setHours(15)

x = d.getDay()

x = d.toJSON()

x = d.getMinutes()

x = d.getSeconds()

x = d.getMilliseconds()


x = `${d.getFullYear()}-${d.getMonth() + 1}-
${d.getDay()}-${d.getHours()}:${d.getMinutes()}`


x = `${d.getHours()}:${d.getMinutes()}`

x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('en-GB').format(d)
x = Intl.DateTimeFormat('default').format(d)

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d)

x = d.toLocaleString('default', { month: 'long' })


x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
})

console.log(x);