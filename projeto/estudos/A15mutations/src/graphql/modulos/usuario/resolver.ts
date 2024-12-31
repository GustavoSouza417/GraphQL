import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import Perfil from "../../../tipos/interfaces/perfil/iPerfil";
import exibirPerfilUsuario from "../../../controllers/crud/usuario/select/exibirPerfilUsuario";
import exibirUsuario from "../../../controllers/crud/usuario/select/exibirUsuario";
import exibirUsuarios from "../../../controllers/crud/usuario/select/exibirUsuarios";
import criarUsuario from "../../../controllers/crud/usuario/criarUsuario";
import atualizarUsuario from "../../../controllers/crud/usuario/atualizarUsuario";
import deletarUsuario from "../../../controllers/crud/usuario/deletarUsuario";
import deletarTodosOsUsuarios from "../../../controllers/crud/usuario/deletarTodosOsUsuarios";

export default {
    Usuario: {
        perfil(usuario: Usuario): Perfil | null {
            return exibirPerfilUsuario(usuario);
        }
    },

    Query: {
        exibirUsuario(_: any, args: {id: string}): Usuario | null {
            return exibirUsuario(args.id);
        },
        
        exibirUsuarios(): Usuario[] | null {
            return exibirUsuarios();
        }
    },

    Mutation: {
        criarUsuario(_: any, args: { nome: string, email: string, senha: string, isAdm: boolean }): Usuario {
            return criarUsuario(args.nome, args.email, args.senha, args.isAdm);
        },

        atualizarUsuario(_: any, args: { id: string, nome: string, email: string, senha: string, isAdm: boolean }): Usuario {
            return atualizarUsuario(args.id, args.nome, args.email, args.senha, args.isAdm);
        },

        deletarUsuario(_: any, args: { id: string }): Usuario | null {
            return deletarUsuario(args.id);
        },

        deletarTodosOsUsuarios(): string {
            return deletarTodosOsUsuarios();
        }
    }
};