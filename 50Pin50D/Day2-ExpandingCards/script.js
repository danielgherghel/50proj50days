// bring all the panels into the javascript file
// this will put all the panels into a node list
const panels = document.querySelectorAll('.panel')


// console.log(panels)

// // target specific panel
// console.log(panels[0])

// panels.forEach((panel) => {
//     console.log(panel)
// })


// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         console.log(123)
//     })
// })


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // remove the class of active from all the other ones
        removeActiveClasses()
        // panel.classList will give us the list of the classes
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}