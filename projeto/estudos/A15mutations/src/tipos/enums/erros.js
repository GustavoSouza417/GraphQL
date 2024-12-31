"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Erros = void 0;
var Erros;
(function (Erros) {
    Erros["ID_NAO_CADASTRADO"] = "O ID de usu\u00E1rio especificado n\u00E3o existe!";
    Erros["EMAIL_JA_CADASTRADO"] = "O endere\u00E7o de e-mail fornecido j\u00E1 est\u00E1 cadastrado!";
    Erros["SEM_USUARIOS_CADASTRADOS"] = "N\u00E3o h\u00E1 usu\u00E1rios cadastrados para apagar no banco de dados";
    Erros["ERRO_LEITURA_JSON"] = "Ocorreu um erro durante a leitura do banco de dados";
    Erros["ERRO_GRAVACAO_JSON"] = "Ocorreu um erro durante a grava\u00E7\u00E3o no banco de dados";
})(Erros || (exports.Erros = Erros = {}));
;
