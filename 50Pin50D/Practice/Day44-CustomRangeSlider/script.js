// step 1 - bring in the slider
const slider = document.getElementById('slider')

// step 2 - add an event listener to that input

slider.addEventListener('input', (e) => {
    const val = +e.target.value
    // console.log(val)
    // step 2.1 get the labels value
    const sticker = e.target.nextElementSibling
    // console.log(sticker)

    // step 2.2 get the value displayed to the label
    // get the width range
    const slider_width = getComputedStyle(e.target).getPropertyValue('width')
    // console.log(slider_width)

    // step 2.3 get the labels width
    const sticker_width = getComputedStyle(sticker).getPropertyValue('width')
    // console.log(sticker_width)

    // 2.4 get the numbers for the slider width
    const slider_num_width = +slider_width.substring(0, slider_width.length -2)
    // console.log(slider_num_width)

    // 2.5 get thw number for the sticker width
    const sticker_num_width = +sticker_width.substring(0, sticker_width.length -2)
    // console.log(sticker_num_width)
    
    // 2.6  get the min and max values
    const max = +e.target.max
    const min = +e.target.min
    // console.log(min, max)

    // 2.7 calculate the left value or the label
    // const left = val * (slider_num_width / max) - sticker_num_width / 2
    // console.log(left)

    // 2.8 use the scale function
    const left = val * (slider_num_width / max) - sticker_num_width / 2 + scale(val, min, max, 10, -10)

    // 2.9 apply the scale function
    sticker.style.left = `${left}px`

    sticker.innerHTML = val



})


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
