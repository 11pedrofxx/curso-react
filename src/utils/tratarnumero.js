export function tratarnumero(numero) {
    return Number(String(numero).replaceAll(',' , '.'));
}