"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = criptografarSenha;
const crypto_1 = require("crypto");
function criptografarSenha(senha) {
    const hash = (0, crypto_1.createHash)("sha512");
    hash.update(senha);
    return hash.digest("hex");
}
;
