function verificarUsuario(usuario){
    return new Promise((resolve, reject) =>{
        if (usuario === "admin"){
            resolve("acceso concedido");
        } else {
            reject("acceso denegado");
        }
    });
};

verificarUsuario("admin")
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
verificarUsuario("Yerpy")
    .then(res=>console.log(res))
    .catch(err=>console.log(err))