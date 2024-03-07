const jsonServer =  require('json-server');
const router = require("db.json");

function readLastUsedMenuId(){
    try{
        const data = router.db.get("lastUsedId").value();
        return data.MenuId;
    }catch(error){
        return 1;
    }
}

function writeLastUsedMenuId(){
    const lastUsedId = router.fb.get("lastUsedId").value();
    lastUsedId.MenuId = value;
    router.db.set("lastUsedId", lastUsedId).write();
}

function readLastMenuListId(){
    try{
        const data = router.db.get("lastUsedId").value();
        return data.MenuListId;
    }catch(error){
        return 1;
    }
}

function writeLastUsedMenuListId(value){
    const lastUsedId = router.db.get("lastUsedId").value();
    lastUsedId.MenuListId = value;
    router.db.set("lastUsedId", lastUsedId).write();
}

module.exports ={
    readLastUsedMenuId,
    writeLastUsedMenuId,
    readLastMenuListId,
    writeLastUsedMenuListId
};