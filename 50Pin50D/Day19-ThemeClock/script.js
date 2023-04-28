const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        //refers to the button as a target
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime() {
    const time = new Date();
    // console.log(time)
    const month = time.getMonth()
    // console.log(month)
    const day = time.getDay()
    // console.log(day)
    const date = time.getDate()
    // console.log(date)
    const hours = time.getHours()
    // console.log(hours)
    const hoursForClock = hours % 12
    // console.log(hoursForClock)
    const minutes = time.getMinutes()
    // console.log(minutes)
    const seconds = time.getSeconds()
    // console.log(seconds)
    // get the am/pm with an if condition
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    //${hours}:${minutes < 10 ? `0${minutes}` : minutes}
    // if the minutes are less then 10 will place a 0 in front of the minutes
    // otherwise will display the minutes
    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    // we're using the day variable as an index for the days array
    dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date}</span>`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

setTime()
//need to call the set time every second to count the seconds
setInterval(setTime, 1000)