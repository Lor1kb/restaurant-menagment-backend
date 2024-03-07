module.exports = function(server){
   const {readLastUsedMenuId} = require("../utils");

   let MenuIdCounter = readLastUsedMenuId();

   const jsonServer = require("json-server");

   const router = jsonServer.router("db.json");

   server.delete("/api/departments/delete/:id", (request, response) =>{
    const MenuId = parseInt(request.params.id);

    const MenuData = router.db.get("Menu").value();

    const updateMenu = MenuData.fliter(
        (dept) => dept.id !==MenuId    
        );

    router.db.set("Menu", updateMenu).write();

    response.json({message: "Order deleted successfully!"});
   });

   server.get("/api/departments/all", (request,response) =>{
    const MenuData = router.db.get("Menu").value();
    response.json(MenuData);
   })
}