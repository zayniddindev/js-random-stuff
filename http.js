const { createServer, request } = require('http')

class Tom {
    name;
    age;
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const tom1 = new Tom('Tom1', 21)

const tom2 = {
    name: 'Tom2', age: 22
}

tom1.password = 1;
tom2.password = 2;

console.log(JSON.stringify(tom1));
console.log(JSON.stringify(tom2));



const server = createServer((req, res) => {
    let data = '';
    req.on('data', (chunk) => {
        data += chunk
    })

    console.log(data);
    res.write(data)
    res.end()
})

server.listen(3000)

// <============================================>

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    data: tom1
};

const req = request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});