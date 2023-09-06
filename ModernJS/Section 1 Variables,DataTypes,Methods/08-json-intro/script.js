

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
}


// Convert to a JSON string
const str = JSON.stringify(post)

// Prsse the JSON
const obj = JSON.parse(str)

const posts = [
    {
        id: 1,
        title: 'Post one',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is the second body'
    }
]

const str2 = JSON.stringify(posts)

console.log(str2);

