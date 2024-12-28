"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = criarUsuario;
const fs_1 = require("fs");
const eTipoPerfil_1 = require("../tipos/enums/tipoPerfil/eTipoPerfil");
function criarUsuario(nome, email, senha) {
    let models;
    let json;
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    json.usuarios["usuario1"] = {
        id: "1",
        nome: nome,
        email: email,
        senha: senha,
        perfil: {
            id: "2",
            nome: eTipoPerfil_1.TipoPerfil.USUARIO
        }
    };
    models = JSON.stringify(json, null, 2);
    (0, fs_1.writeFileSync)("./src/models/models.json", models, "utf-8");
    return json.usuarios["usuario1"];
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
