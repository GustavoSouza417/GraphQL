"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isEmailCadastrado;
const fs_1 = require("fs");
function isEmailCadastrado(email) {
    let models;
    let json;
    let usuario;
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    for (usuario of Object.values(json.usuarios)) {
        if (usuario.email === email)
            return true;
    }
    ;
    return false;
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
