"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exibirUsuarios;
const fs_1 = require("fs");
function exibirUsuarios() {
    let models;
    let json;
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    return Object.values(json.usuarios) || null;
}
;
