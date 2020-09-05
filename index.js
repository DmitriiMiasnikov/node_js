const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.write('<h1>hello from node</h1>')
    res.end('<div style="width: 100px; height: 100px; background-color: red"></div>')
})
server.listen(3000, () => {
    console.log('server has started')
})