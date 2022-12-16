let html = document.getElementById("tela")

// ######################################### QUESTÃO 1, 2 e 3 #####################################################

// let nomes = [];
// let tamanhoArray = prompt("Indique o TAMANHO do array: ");
// let novoNome = "";

// for(let i = 0; i < tamanhoArray; i++){
//   novoNome = prompt("Indique um nome: ")
//   nomes.push(novoNome);
// };

// nomes.sort((nome2, nome1) =>{
//   return nome2.toLowerCase() > nome1.toLowerCase() ? 1 : nome2.toLowerCase() < nome1.toLowerCase() ? -1 : 0;

// });

// html.innerHTML = `<b>A informação que você busca está no console deste navegador<br>
// Pressione <button>ctrl</button> + <button>shift</button> + <button>i</button></b>`

// console.log(nomes)

// let inicitalVogais = nomes.filter((nome) => {

//   if(nome[0].toLowerCase() == "a" || nome[0].toLowerCase() == "e" || nome[0].toLowerCase() == "i" || nome[0].toLowerCase() == "o" || nome[0].toLowerCase() == "u" ){

//     return nome
//   }
// });

// console.log(inicitalVogais);
// ######################################### QUESTÃO 4 #####################################################


// let clientes = [];
// let produtos = [];
// let auxiliarProdutos = {}
// let auxiliarClientes = {}
// let produtoCliente;
// let pesquisaCliente;
// let pesquisaProduto;
// let input = 0;

// while(input != 2){

//   input = Number(prompt(
//     `
//     CADASTRO PRODUTO: Navegue utilizando NÚMEROS. Indique a opção desejada:
//     [1]-Inserir novo PRODUTO;
//     [2]-Sair.
//     `
//   ));

//     switch(input){
//       case 1:
//         auxiliarProdutos["nome"] = prompt("Nome do produto:");
//         auxiliarProdutos["preco"] = Number(prompt("Indique o preço unitário do produto(Ex: 1.99, 30 ou 100.5): "));
//         auxiliarProdutos["qtd"] = Number(prompt("Agora informe a quantidade dos produtos:"));

//         produtos.unshift(auxiliarProdutos);
//         auxiliarProdutos = {}
//         break
//       case 2:

//         break
//       default:
//         html.innerHTML = `<b>Número inválido</b>`

//         break
//     }

// }
// input = 0
// while (input != 2) {
//   input = Number(prompt(
//     `
//     AGORA O CLIENTE: Navegue utilizando NÚMEROS. Indique a opção desejada:
//     [1]-Inserir novo CLIENTE;
//     [2]-Sair.
//     `
//   ));

//   switch (input) {
//     case 1:
//       auxiliarClientes["nome"] = prompt("Nome do CLIENTE:");
//       produtoCliente = prompt("Indique o produto comprado pelo cliente já cadastado anteriormente:");

//       auxiliarClientes["compra"] = buscar(produtoCliente, produtos);
//       clientes.unshift(auxiliarClientes);
//       auxiliarClientes = {}

//       break;

//     case 2:
//       break

//     default:

//       break;
//   }

// }
// input = 0;
// alert("Cadastro realizado com sucesso.");

// input = Number(prompt(
//     `
//     PESQUISA: Navegue utilizando NÚMEROS. Indique a opção desejada:
//     [1]-Buscar cliente;
//     [2]-Buscar PRODUTO.
//     [3]-Sair.
//     `
// ));

// if(input === 1){
//   pesquisaCliente = prompt("Nome do cliente: ");
//   console.log(buscar(pesquisaCliente, clientes));

// } else if(input === 2){
//   pesquisaProduto = prompt("Nome do produto: ");
//   console.log(buscar(pesquisaProduto, produtos));

// }else{
//   alert("Fim do programa");
// }

// html.innerHTML = `<b>A informação que você busca está no console deste navegador<br>
// Pressione <button>ctrl</button> + <button>shift</button> + <button>i</button></b>`

// console.log("Arrays utilizados:");

// console.log(produtos);
// console.log(clientes);



// function buscar(nome, arr){
//   const busca = arr.find(item => item.nome === nome);

//   if(busca === undefined){
//     return {'Error': 'A informação solicitada não foi encontrada'};
//   }

//   return busca;
// };


// ######################################### QUESTÃO 5 #####################################################

// let usuarios = [];
// let usuarioAuxiliar = {};
// let input;
// let usuario;
// let buscarUsuario;
// let localizarUsuario;

// while (input != 5) {
//   input = Number(prompt(
//     `Indique o NÚMERO da opção desejada:

//             [1]-Inserir novo registro
//             [2]-Editar Registro
//             [3]-Excluir Registro
//             [4]-Procurar registros por nome
//             [5]-Sair`
//   ));

//   switch (input) {
//     case 1:
//       usuarioAuxiliar["nome"] = prompt("Nome do usuário:")

//       usuarios.unshift(usuarioAuxiliar);
//       usuarioAuxiliar = {};

//       break;

//     case 2:
//       usuario = prompt("Indique o nome do usuário que deseja altera:");
//       atualizar(usuario, usuarios);

//       break;
//     case 3:
//       buscarUsuario = prompt("Indique o funcionário que deseja excluir: ");
//       excluir(buscarUsuario, usuarios);

//       break;

//     case 4:
//       localizarUsuario = prompt("Nome do usuário: ");
//       buscar(localizarUsuario, usuarios);
//       break;

//     case 5:
//       alert("O array atual será impresso no console!")
//       break;

//     default:
//       alert("Informe uma opção válida.")

//       break;
//   }
// }

// function atualizar(nomeUsuario, arr) {
//   buscarUsuario = arr.findIndex(item => item.nome === nomeUsuario)

//   if (buscarUsuario === -1) {
//     return alert("Usuário não encontrado.")
//   }

//   arr[buscarUsuario] = { nome: prompt("Indique o nome correto: ") };

//   return {
//     nomeUsuario,
//     ...arr[buscarUsuario]
//   }
// };

// function excluir(nomeUsuario, arr) {
//   buscarUsuario = arr.findIndex(item => item.nome === nomeUsuario);

//   if (buscarUsuario === -1) {
//     return alert("Usuário não encontrado.");
//   }
//   arr.splice(buscarUsuario, 1);
//   alert("Usuário deletado com sucesso");
// };

// function buscar(nome, arr) {
//   buscarUsuario = arr.find(item => item.nome === nome);

//   if (buscarUsuario === undefined) {
//     return alert('A informação solicitada não foi encontrada');
//   }
//   console.log(buscarUsuario);
// };

// console.log(usuarios);

// ######################################### QUESTÃO 6 #####################################################

// let clientes = [];
// let clienteAux = {};
// let input;

// do {
//   input = Number(prompt(
//     `Indique o NÚMERO da opção desejada:
//     [1]-Inserir novo registro
//     [2]-Dia da promoção
//     [3]-Sair`
//   ));

//   switch (input) {
//     case 1:
//       clienteAux["nome"] = prompt("Nome do cliente: ");
//       clienteAux["valorCompra"] = Number(prompt("Valor total das compras:"));

//       clientes.unshift(clienteAux);
//       clienteAux = {};
//       break;

//     case 2:

//       let maiorValor = clientes.reduce((prev, curr) => { return prev.valorCompra > curr.valorCompra ? prev : curr });

//       console.log(`${maiorValor.nome} gastou um total de ${maiorValor.valorCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })} receberá 10% de cashback.`);

//       for (let i = 0; i < clientes.length; i++) {
//         if (clientes[i].nome != maiorValor.nome) {
//           console.log(`${clientes[i].nome} gastou um total de ${clientes[i].valorCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })} receberá 5% de cashback.`);
//         }
//       }

//       break
//     case 3:
//       alert("Saiu do programa.");

//     default:
//       break;
//   }

// } while (input != 3);