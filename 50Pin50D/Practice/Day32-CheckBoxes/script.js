const switchEl = document.querySelectorAll('.switch')
const healty = document.querySelector('#bronze')
const inconvienient = document.querySelector('#silver')
const cheap = document.querySelector('#gold')

switchEl.forEach(tgl => tgl.addEventListener('change',
(e) => doTheChange(e.target)))


function doTheChange(theSelected){
    if( healty.checked && inconvienient.checked && cheap.checked){
        if(healty == theSelected){
            cheap.checked = false
        }
        if(inconvienient == theSelected){
            healty.checked = false
        }
        if (cheap == theSelected){
            inconvienient.checked = false
        }
    }
}