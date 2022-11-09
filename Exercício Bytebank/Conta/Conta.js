//Uma classe abstrata não pode ser instanciada, ela apenas é herdada por outras classes

export class Conta { //Fazendo um único objeto que servirá como base para todas as contas do Bytebank
    constructor(saldoInicial,cliente,agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata!"); //Comando para lançar um novo erro no código para impedir sua execução caso as condições do if sejam true
        }

        this._saldo = saldoInicial; //É uma boa prática declarar as propriedades dentro da classe como privadas e também inicializa-las
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){ 
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente; 
    }


    get saldo(){ 
        return this._saldo; 
    }

    //Método abstrato é aquele que não pode ser chamado diretamente, ele é feito para ser sobreescrito por outros métodos herdados da mãe. Para assim a taxa ser obrigatória em todas as contas
    sacar(valor){ 
     throw new Error("O método Sacar da conta é abstrato!")
    }

    _sacar(valor, taxa){ //Deixando privado as funções bases do método para apenas alterarmos aquilo que pode variar entre as contas
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado; 
        }

        return 0; //Retornando 0 para caso os requerimentos do if não forem cumpridos
    }

    depositar(valor){
        if(valor <= 0) return; 
        this._saldo += valor;
    }

    transferir(valor, conta){ 
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); 
    }
}