const http = require('http')

const testing = () => {
    return "<h1>every port number is 50000</h1>"
}

const server = http.createServer((req, res) => {
    console.log('hello')
    res.end(testing())
})

server.listen(50000, ()=>console.log('server in cmd'))
