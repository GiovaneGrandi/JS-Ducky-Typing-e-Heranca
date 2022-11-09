import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta { //Extendendo (herança) os métodos de Conta para ContaCorrente como se eles estivessem escritos aqui
    static numeroDeContas = 0;

    constructor (cliente, agencia){
        super(0, cliente, agencia); //O "super" é usado para chamar o mesmo método do pai dessa herança, como ele foi colocado no constructor ele vai chamar o constructor da "Conta"
        ContaCorrente.numeroDeContas += 1; //Também é possível usar o "super" para chamar métodos específicos da classe mãe usando o "super."
    }

    sacar(valor){ //Ao chamar o "contaCorrente.sacar" ele irá chamar este método que está sobreescrevendo o método da "Conta" e então ignorando o método mãe
        let taxa = 1.1 //Taxa exclusiva da conta corrente, o código foi sobreescrito aqui para não impactar nas outras contas
        return this._sacar(valor, taxa); //Pela ContaCorrente ser uma herdeira da Conta ela pode chamar os métodos da mãe como se fossem dela, assim alterando a taxa especialmente para ela e retornando a função privada de sacar
    }
}