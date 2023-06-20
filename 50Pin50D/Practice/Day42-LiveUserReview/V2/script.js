// step 1
const content = document.getElementById('content')
const filterS = document.getElementById('filter')


// step 2
const listItems = []


// step 3.4 - call the function

createData()

// step 4.3 create a filter for the data - an event listener so when you type in
// will fire up an event that's going to call a function

filterS.addEventListener('input', (e)=> filterData(e.target.value))

// step3

async function createData(){
    // step 3.1

    const res = await fetch('https://randomuser.me/api?results=50')

    // step 3.2
    const {results } = await res.json()

    // 3.5 clear the initial html
    content.innerHTML = ''

    // 3.7 loop through the results

    results.forEach(user =>{
        // 3.8 verify the data
        // console.log(user)

        // 3.9 construct the li element
        const li = document.createElement('li')

        // 4.0 push on the li that was created into listItems

        listItems.push(li)

        // 4.1 add the elements into the li

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-data">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        // 4.2 append the li to the html 

        content.appendChild(li)
    })
}

// 4.4 create the function that's taking the argument as what's typed in

function filterData(userValue){
    // 4.5 check the input
    // console.log(userValue)

    // 4.6 loo through the item list
    listItems.forEach(item =>{
        // 4.7 check to see if it matches the users
        // 4.7.1 item = li as we're looping
        // 4.7.2 converting the seach to the lower cases  using .toLowerCase()
        // 4.7.3 we're using the include method
        // 4.7.4 if it includes we type in that input
        if (item.innerText.toLowerCase().includes((userValue).toLowerCase())) {
            // 4.8 if matches we remove the class of hide that's setting the li as hide
            item.classList.remove('hide')
            // 4.8.1 if it does not match we want to add the class of hide
        } else {
            item.classList.add('hide')
        }

    })

}