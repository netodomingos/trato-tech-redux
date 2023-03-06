import { Cart } from "./Cart";
import { Categorys } from "./Categorys";
import { Itens } from "./Itens";

export interface RootStore {
    categorys: Array<Categorys>
    itens: Array<Itens>
    cart: Array<Cart>
}

export interface RootItensReducer {
    state: Array<Itens>,
    params: Params
}

type Params = {
    playload: any,
    type: string
}