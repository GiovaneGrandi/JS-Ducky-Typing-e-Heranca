import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Giovane", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612378, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123"); //Uma constante pode aceitar qualquer tipo de funcionario desde que eles herdem da classe mãe "Funcionario"
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

//Quando você chama um método de uma classe você está chamando justamente o método que pertence a aquela classe, se você quiser chamar junto o método da mãe, deverá colocar o atributo "super" naquele método

//2 cliques em uma palavra e ctrl + D o VS code procura a próxima palavra igual e então possibilita editar a palavra em mais de um lugar ao mesmo tempo