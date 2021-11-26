export interface ICrypto {
    name?: string,
    toUSD: number | string,
    toEUR: number | string,
    toUAH: number | string,
    icon: string,
}
export interface IAction {
    type: string,
    payload? : string | object,
}

export interface IState {
    actualCoin:object
}
