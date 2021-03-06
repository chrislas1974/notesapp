const restify = require('restify'),
  registerNoteRoutes = require("./routes/noteRoutes")
  port = process.env.PORT || 4000;

const server=restify.createServer({
  name: "Notes API"
});

// dev time only
server.use(restify.CORS());

registerNoteRoutes(server, require("./controllers/noteController"));

server.listen(port,() => {
  console.log("API notes-server running on port ..."+port);
});
