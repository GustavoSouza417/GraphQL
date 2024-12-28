"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = autoIncrement;
const fs_1 = require("fs");
function autoIncrement() {
    let models;
    let json;
    let id;
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    id = (Object.keys(json.usuarios).length) + 1;
    return id.toString();
}
;
