import Usuario from "../interfaces/usuario/iUsuario";
import Perfil from "../interfaces/perfil/iPerfil";
import { tipoPerfis } from "../enums/tipoPerfis";

export const bancoDeDados: { usuarios: Usuario[], perfis: Perfil[] } = {
    usuarios: [
        {
            id: "1",
            nome: "Lucas",
            perfil: "1"
        },
    
        {
            id: "2",
            nome: "Joana",
            perfil: "2"
        }
    ],

    perfis: [
        {
            id: "1",
            nome: tipoPerfis.ADMINISTRADOR
        },
    
        {
            id: "2",
            nome: tipoPerfis.USUARIO
        }
    ]
}