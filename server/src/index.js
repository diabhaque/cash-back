const express = require('express')
const app = express()

//dummy user data
let users = [
    {
        id: 1,
        name: 'John Doe',
        employer: 'Microsoft'
    },
    {
        id: 2,
        name: 'Ahsan Syed',
        employer: 'First Code Academy'
    },
    {
        id: 3,
        name: 'Donald Trump',
        employer: 'White House'
    }
]

app.get('/', (req, res) => {
    res.send("home")
})

app.get('/users', (req, res) => {
    //get list of all users
    res.send(users)
})

//start server
app.listen(3000, () => {
    console.log('listening on port 3000')
})