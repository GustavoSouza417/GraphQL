import { createHash, Hash } from "crypto";

export default function criptografarSenha(senha: string): String {
    const hash: Hash = createHash("sha512");
    hash.update(senha);
    return hash.digest("hex");
};