const Router = require('restify-router').Router;

let registerRoutes = (server, controller) => {
  let router = new Router();

  router.get('',(req,res,next) =>{
    let result=controller.getAll();
    res.send(200, result);
  });

  router.get('/:id',(req,res,next) =>{
    let id= +req.params.id;
    let note=controller.getById(id);
    if (note){  res.send(200,note)  }
    else {      res.send(404,"NO note found with id "+id); }
  });

  router.applyRoutes(server,'api/notes');
};

module.exports = registerRoutes;
