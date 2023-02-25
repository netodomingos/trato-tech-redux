import { Categorys } from "./Categorys";
import { Itens } from "./Itens";

export interface RootStore {
    categorys: Array<Categorys>
    itens: Array<Itens>
}