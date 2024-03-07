const jsonServer = require("json-server");

const jsonServerPort = 8095;

const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser);
server.use(middlewares); //logger, cors etc.

const restaurantsRoutes = require(".routes/restaurants");
//const menyRoutes = require(".routes/meny");

restaurantsRoutes(server);
//menyRoutes(server);

server.listen(jsonServerPort, () =>{
    console.log(`JSON Server is runing on ${jsonServerPort}`);
});