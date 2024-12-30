import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import Perfil from "../../../tipos/interfaces/perfil/iPerfil";
import exibirPerfilUsuario from "../../../controllers/exibirPerfilUsuario";
import exibirUsuario from "../../../controllers/exibirUsuario";
import exibirUsuarios from "../../../controllers/exibirUsuarios";
import criarUsuario from "../../../controllers/criarUsuario";

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
        }
    }
};