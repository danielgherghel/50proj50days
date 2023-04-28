const checkEl = document.querySelectorAll('.check')
const naturalEl = document.querySelector('#natural')
const steroidsEl = document.querySelector('#steroids')
const fattyEl = document.querySelector('#fatty')



checkEl.forEach(toggle => toggle.addEventListener('change',
(e) => makeChanges(e.target)))


function makeChanges(whatever){
    if(naturalEl.checked && steroidsEl.checked && fattyEl.checked){
        if(naturalEl === whatever){
            steroidsEl.checked = false
        }
        if(steroidsEl === whatever){
            naturalEl.checked = false
        }
        if(fattyEl === whatever){
            naturalEl.checked = false
        }
    }
}