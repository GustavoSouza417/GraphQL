"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exibirUsuario;
const fs_1 = require("fs");
function exibirUsuario(id) {
    let models;
    let json;
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    return Object.values(json.usuarios).find((usuario) => usuario.id === id) || null;
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
