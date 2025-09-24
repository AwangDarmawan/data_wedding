


// const jsonServer = require("json-server"); 
// const server = jsonServer.create();
// const router = jsonServer.router("db.json"); // <-- menunjuk ke file db.json
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3001; 

// server.use(middlewares);
// server.use(router);

// server.listen(port, () => {
//     console.log(`JSON Server berjalan di port ${port}`);
// });
const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

// export untuk Vercel
module.exports = server;

// kalau running lokal
if (require.main === module) {
  const port = process.env.PORT || 3001;
  server.listen(port, () => {
    console.log(`JSON Server berjalan di http://localhost:${port}`);
  });
}
