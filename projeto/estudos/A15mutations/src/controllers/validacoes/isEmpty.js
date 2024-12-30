"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringEmpty = isStringEmpty;
exports.isBooleanEmpty = isBooleanEmpty;
function isStringEmpty(valor) {
    if (typeof valor === "string")
        valor = valor.trim();
    return valor === "" || valor === null || valor === undefined;
}
;
function isBooleanEmpty(valor) {
    return valor === null || valor === undefined;
}
;
