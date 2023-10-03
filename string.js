const client = require('./client')

async function init() {
    // await client.set('user:1', 'sarthak')
    await client.set('user:2', 'om')
    const result = await client.get('user:2')
    console.log(result);
}

init();