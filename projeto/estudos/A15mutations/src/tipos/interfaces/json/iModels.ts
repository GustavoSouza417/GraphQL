import Usuario from "../usuario/iUsuario";
import Perfil from "../perfil/iPerfil";

export default interface Models {
    usuarios: {
        [key: string]: Usuario;
    };

    perfis: {
        [key: string]: Perfil;
    };
};