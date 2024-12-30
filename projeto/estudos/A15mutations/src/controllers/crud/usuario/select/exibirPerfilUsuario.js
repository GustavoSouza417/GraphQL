"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exibirPerfilUsuario;
const fs_1 = require("fs");
function exibirPerfilUsuario(usuario) {
    let models;
    let json;
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    const perfil = Object.values(json.perfis).find((perfil) => perfil.id === usuario.perfil);
    return perfil || null;
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
