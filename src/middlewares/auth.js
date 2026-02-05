const adminAuth = (req,res,next) =>{
    //Logic of checking if the request is authorized
    const token = "xyzwueggfwe"
    const isAdminAuthorized = token === "xyzwueggfwe"
    if(!isAdminAuthorized){
                res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
}

const userAuth =  (req,res,next) =>{
    //Logic of checking if the request is authorized
    const token = "xyzwueggfwe"
    const isAdminAuthorized = token === "xyzwueggfwe"
    if(!isAdminAuthorized){
                res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
}

module.exports = {adminAuth,userAuth}
