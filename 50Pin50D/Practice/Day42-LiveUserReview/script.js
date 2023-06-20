// step 1 bring in all the elements youll use
const outcome = document.getElementById('outcome')
const refin = document.getElementById('refin')

// step 2 - initialize an array and set to empty
const itemsList = []


// 3.4 call the function
populateData()


// 4.3 create a filter for the data - an event listener when we type in
// when an input is happening we're firing on an event that's going to call a function
// add the e.target.value as a parameter to give us whatever we type in

refin.addEventListener('input', (e) => refineData(e.target.value))



// step 3 create an async function
async function populateData(){
    // 3.1 get the reponse

    const res = await fetch('https://randomuser.me/api?results=100')

    // 3.2 with the fetch api we need to await res.json
    // changed to 3.6 from: const data = await res.json()

    // 3.6 destructure
    const { results } = await res.json()

    // 3.3 see the data

    // console.log(data)

    // 3.5 Clear the results - start with a blank page

    outcome.innerHTML = ''

    // 3.7 loop through the results

    results.forEach(user =>{
        // 3.8 make sure you're getting the data
        // console.log(user)

        // 3.9 construct the li that was previosly hard coded into the html document
        const li = document.createElement('li')



        // 4.0 push on any of the li's created into the itemsList that was previosly empty
        itemsList.push(li)

        // 4.1 take the li and add the innerHTML adding the html elements

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-material">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        // 4.2 append it into the html
        outcome.appendChild(li)

    })

}


// 4.4 Create the function that's taking an argument as whatever what's typed in
function refineData(inputValue){
    // 4.5 check that input
    // console.log(inputValue)

    // 4.6 take the list items and loop through
    itemsList.forEach(item => {
        // 4.7 check to sdee if it matches the user
        // 4.7.1 item is refering to the li items as we're looping through
        // 4.7.2 we need to convert the item to lower case using .toLowerCase()
        // 4.7.3 then we use the include method
        // 4.7.4 if the li item includes the whatever we type into the input
        if(item.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
            // 4.8 If it matches we wanna include the class of hide we have on the li that's set to display none
                item.classList.remove('hide')
                // 4.8.1 if it does not match we want to add the class of hide
        } else {
            item.classList.add('hide')
        }
    })
}