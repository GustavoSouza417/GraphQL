import { readFileSync } from "fs";
import Models from "../../tipos/interfaces/json/iModels";
import Usuario from "../../tipos/interfaces/usuario/iUsuario";

function isEmailCadastrado(email: string): boolean {
    let models: string;
    let json: Models;
    let usuario: Usuario;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    
    for(usuario of Object.values(json.usuarios)) {
        if(usuario.email === email)
            return true;
    };

    return false;
};

function isIdCadastrado(id: string): boolean {
    let models: string;
    let json: Models;
    let usuario: Usuario;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    
    for(usuario of Object.values(json.usuarios)) {
        if(usuario.id === id)
            return true;
    };

    return false;
};

export { isEmailCadastrado, isIdCadastrado };

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers