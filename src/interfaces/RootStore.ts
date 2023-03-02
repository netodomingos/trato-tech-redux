import { Categorys } from "./Categorys";
import { Itens } from "./Itens";

export interface RootStore {
    categorys: Array<Categorys>
    itens: Array<Itens>
}

export interface RootItensReducer {
    state: Array<Itens>,
    params: Params
}

type Params = {
    playload: any,
    type: string
}