export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf =  cpf;
        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha){ //Autenticador que irá verificar se a senha colocada é a mesma que está guardada no sistema sem expor ela, além de poder deixar todos autenticaveis
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}

