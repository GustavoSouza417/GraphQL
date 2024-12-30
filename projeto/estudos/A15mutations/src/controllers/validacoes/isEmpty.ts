function isStringEmpty(valor: string): boolean {
    if(typeof valor === "string")
        valor = valor.trim();
    return valor === "" || valor === null || valor === undefined;
};

function isBooleanEmpty(valor: boolean): boolean {
    return valor === null || valor === undefined;
};

export { isStringEmpty, isBooleanEmpty };