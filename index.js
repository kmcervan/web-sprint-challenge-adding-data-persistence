// start your server here
const server = require('./api/server');

const port = process.env.PORT || 4002;

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})