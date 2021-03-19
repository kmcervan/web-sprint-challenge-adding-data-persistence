// start your server here

const server = require('./api/server');

const port = process.env.PORT || 4003;

server.listen(port, ()=> console.log(`\n** Running on port ${port} **\n`));