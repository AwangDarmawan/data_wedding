


// // const jsonServer = require("json-server"); 
// // const server = jsonServer.create();
// // const router = jsonServer.router("db.json"); // <-- menunjuk ke file db.json
// // const middlewares = jsonServer.defaults();
// // const port = process.env.PORT || 3001; 

// // server.use(middlewares);
// // server.use(router);

// // server.listen(port, () => {
// //     console.log(`JSON Server berjalan di port ${port}`);
// // });

// const jsonServer = require("json-server");
// const cors = require("cors");

// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();

// const db = {
//   wedding: [
//     { id: 1, name: "jeri", message: "gas", attendance: "yes" },
//     { id: 2, name: "Ferro", message: "berangkt", attendance: "yes" }
//   ]
// };

// const router = jsonServer.router(db);

// server.use(cors());
// server.use(middlewares);
// server.use(router);

// module.exports = server;

// if (require.main === module) {
//   const port = process.env.PORT || 3001;
//   server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });
// }
const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Menggunakan file db.json
const router = jsonServer.router("db.json");

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Optional: log request
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

server.use(router);

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`🚀 JSON Server running at http://localhost:${port}`);
});