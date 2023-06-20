// step 1 bring in the range
const range = document.getElementById('range')

// step 2 - add an event listener to that input
// e.target.value is reffering to the range.value
// +e.target.value - added the + in front of the value to convert it to a number
range.addEventListener('input', (e) => {
    const value = +e.target.value
    // console.log(value)
    // step 2.1 - get the label
    // having the access on the e.targhet which is the range will give us access 
    // to the next sibbling element
    const label = e.target.nextElementSibling
    // step 2.2 get the value displayed to the label


    // step 2.3 get the width of the range that was set to 300px in the css
    // getComputedStyle() to get values from the css
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    // console.log(range_width)

    // 2.4 account for the label width as well

    const label_width = getComputedStyle(label).getPropertyValue('width')
    // console.log(label_width)

    // 2.5 get the numbers for those widths - right now we're getting them with the px at the end

    const num_width = +range_width.substring(0, range_width.length - 2)
    // console.log(num_width)

    const num_label_width = +label_width.substring(0, label_width.length - 2)
    // console.log(num_label_width)

    // 2.6 get the minimum and max values - we've set those into the html input element
    const max = +e.target.max
    const min = +e.target.min

    // 2.7 calculate the left property of the label to follow up our range
    // value = curent value of the range
    // const left = value * (num_width / max) - num_label_width / 2
    // console.log(left)

    // 2.8 apply the scale function
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    // apply the left value to the label left css property
    label.style.left = `${left}px`


    label.innerHTML = value
})


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
