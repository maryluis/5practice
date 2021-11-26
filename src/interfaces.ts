export interface ICrypto {
    name?: string,
    USD: number | string,
    EUR: number | string,
    UAH: number | string,
    icon: string,
}
export interface IAction {
    type: string,
    payload? : string | object,
}
export interface IActionObj {
    type: string,
    payload: object
}

export interface IState {
    actualCoin:object
}
