"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exibirPerfilUsuario_1 = __importDefault(require("../../../controllers/crud/usuario/select/exibirPerfilUsuario"));
const exibirUsuario_1 = __importDefault(require("../../../controllers/crud/usuario/select/exibirUsuario"));
const exibirUsuarios_1 = __importDefault(require("../../../controllers/crud/usuario/select/exibirUsuarios"));
const criarUsuario_1 = __importDefault(require("../../../controllers/crud/usuario/criarUsuario"));
const atualizarUsuario_1 = __importDefault(require("../../../controllers/crud/usuario/atualizarUsuario"));
const deletarUsuario_1 = __importDefault(require("../../../controllers/crud/usuario/deletarUsuario"));
const deletarTodosOsUsuarios_1 = __importDefault(require("../../../controllers/crud/usuario/deletarTodosOsUsuarios"));
exports.default = {
    Usuario: {
        perfil(usuario) {
            return (0, exibirPerfilUsuario_1.default)(usuario);
        }
    },
    Query: {
        exibirUsuario(_, args) {
            return (0, exibirUsuario_1.default)(args.id);
        },
        exibirUsuarios() {
            return (0, exibirUsuarios_1.default)();
        }
    },
    Mutation: {
        criarUsuario(_, args) {
            return (0, criarUsuario_1.default)(args.nome, args.email, args.senha, args.isAdm);
        },
        atualizarUsuario(_, args) {
            return (0, atualizarUsuario_1.default)(args.id, args.nome, args.email, args.senha, args.isAdm);
        },
        deletarUsuario(_, args) {
            return (0, deletarUsuario_1.default)(args.id);
        },
        deletarTodosOsUsuarios() {
            return (0, deletarTodosOsUsuarios_1.default)();
        }
    }
};
