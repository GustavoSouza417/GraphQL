import Perfil from "../perfil/iPerfil";

export default interface Usuario {
    id: String;
    nome: String;
    email: String;
    senha: String;
    perfil: String;
};