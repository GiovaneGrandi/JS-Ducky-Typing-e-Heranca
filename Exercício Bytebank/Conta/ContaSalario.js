import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100);
    }

    sacar(valor){ //Método abstrato sobreescrito, se ele não for sobreescrito acionará um erro no código
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}