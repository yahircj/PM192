function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");

        }, 5000);
    });
}

async function obteneerDatos() {
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

obteneerDatos();