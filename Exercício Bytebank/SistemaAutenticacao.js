// Ser autenticavel significa ter o método "autenticar"

export class SistemaAutenticacao{
    static login(autenticavel, senha){ //Não interessa para esse método se o objeto é um cliente ou um funcionario, ele irá autenticar todos que forem auntenticaveis, ou seja, que tiverem o método "autenticar" em suas classes
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){ //Se a chave "autenticavel" não for achada no objeto em questão ele pulará o if e retornará como false
            return autenticavel.autenticar(senha); //Como o autenticar está sendo chamado como função a chave buscada será a de uma função
        }
        return false; //Se alguém não for autenticavel invés de ocorrer um erro no terminal o if retornará essa pessoa como false assim impedindo o login sem ter um erro
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; //Verificando se a chave "autenticar" existe dentro do objeto que estiver sendo autenticado na memória e depois verificando se ele é uma função, assim só poderão logar quem tiver uma FUNÇÃO "autenticar", antes qualquer tipo de objeto com o nome "autenticar" seria interpretado como autenticavel
    }
}

 //Por se usar a classe abstrata como parametro nas propriedades é possível informar qualquer um de seus filhos sem ter que criar uma nova propriedade, pois no caso diretor e gerente são todos funcionarios então eles são aceitos como parametro. "Polimorfismo"

//O polimorfismo se resume a classes que poderão ser tratadas de maneiras iguais e poderam se encaixar porém desde que elas compartilhem de uma interface igual (com mesmos parametros, métodos...)

//Para guardar uma classe o Javascript reserva um espaço na memória do computador para guardar suas propriedades e atributos e então ele fábrica um chave que leva ao espaço de memória onde estão guardados os atributos, para cada atributo uma nova chave é criada

//Pelo JS não ser uma linguagem fortemente tipada os tipos dos objetos não importam muito mas sim as suas interfaces, por isso o polimorfismo é tão importante 

//Esse método é chamado de Ducky Typing, ele é muito comum em liguagens fracamente tipadas por não necessitar de uma atenção muito grande aos tipos dos objetos. O termo vem do teste do pato que diz: Se ele anda como pato, ou faz quac como um pato então provavelmente ele é um pato. No fim não interessa o que o objeto é, só interessa a maneira que ele se comporta, se ela é igual aos outros ou não