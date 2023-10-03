const express = require('express')
const axios = require('axios').default;
const client = require('./client')

const app = express();

app.get('/', async (req, res) => {
    // checks for the cached value if present
    const cachedValue = await client.get('todos')
    if (cachedValue) return res.json(JSON.parse(cachedValue))

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    // sets the cached value
    await client.set('todos', JSON.stringify(data))
    // sets the cached value with a expiry time of 30 seconds
    await client.expire('todos', 30)
    return res.json(data);
})

app.listen(9000);