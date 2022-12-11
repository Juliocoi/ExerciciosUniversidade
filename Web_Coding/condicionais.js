/* INSTRUÇÕES 

PARA EXECUTAR O PRESENTE CÓDIGO SERÁ NECESSÁRIO UM DOC HTML COM UMA DIV ID "TELA". UM MODELO DE HTML SEGUE EM ANEXO.
SELECIONAR TODA ÁREA DA QUESTÃO QUE QUER CHECAR E USAR O ATALHO CTRL + ; A LINHA 6 NÃO PODE ESTAR COMENTADA.*/
let html = document.querySelector('#tela')

// ######################################### QUESTÃO 1 e 2 #####################################################
// function imc(peso, altura){

//   Number(peso, altura);

//   const imc = peso / Math.pow(altura, 2);

//   if(imc > 25.99){
//     return html.innerHTML = `<b>Seu IMC é ${imc.toFixed(2)}. Você está acima do peso</b>`
//   } else {
//     return html.innerHTML = `<b>Seu IMC é ${imc.toFixed(2)}. Você está com o peso ideal</b>`;
//   }

// }

// const peso = prompt("Indique seu peso: ");
// const altura = prompt("Indique seu altura: ");

// imc(peso, altura);

// ######################################### QUESTÃO 3 #####################################################
// function ePar(num){

//   if(num % 2 == 0){
//     return html.innerHTML =`<b>O número ${num} é par!</b>`;
//   } else {
//     return html.innerHTML =`<b>O número ${num} é ímpar.</b>`;
//   } 

// }

// const num = prompt("Indique um número para saber se é PAR ou ÍMPAR: ")
// ePar(num);

// ######################################### QUESTÃO 4 e 5 #####################################################
// function posto(cod, qtd){
//   let codigo = Number(cod);
//   let litros = Number(qtd);
//   let gasolina =  419 / 100;
//   let alcool = 316 / 100

//   switch (codigo) {
//     case 1:
//       html.innerHTML = `<b>Combustível escolhido: Álcool - ${alcool
//         .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. </br> 
//       ${litros} litros. Total a pagar ${(alcool * litros)
//         .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}`;
//       break;

//     case 2:
//       html.innerHTML = `<b>Combustível escolhido: Gasolina - R$ ${gasolina}. </br> 
//       ${litros} litros. Total a pagar ${(gasolina * litros)
//         .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}`;
//       break

//     default:
//       html.innerHTML = "<b>Valor inválido.</b>";
//       break;
//   }
// }

// const codigo = prompt("Escolha: 1 - Álcool ou 2- Gasolina: ")
// const qtd = prompt('Indique quantos litros você deseja: ');
// posto(codigo, qtd);

// ######################################### QUESTÃO 6 #####################################################
// function eMaior(num){
//   const data = new Date();
//   const ano = data.getFullYear();

//   const idadeAtual = ano - num;

//   if (idadeAtual < 18){
//     return html.innerHTML = '<b>Entrada proibida. É preciso ser maior de idade para ter acesso as nossas dependências.</b>';
//   } else {
//     return html.innerHTML = '<b>Bem vindo(a) à Drinks & Tombos.</b>';
//   }
// }

// const ano = prompt("Indique o ano de seu nascimento: ");
// eMaior(ano);

// ######################################### QUESTÃO 7 #####################################################
// function kg(peso){

//   if(peso > 5){
//     return html.innerHTML = `Total devido ${(2.2 * peso)
//       .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} `;
//   } else {
//     return html.innerHTML = `Total devido ${(peso * 2.5)
//       .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
//   }
// }

// const peso = prompt("Quantos Kg de morangos você deseja: ");
// kg(peso);

// ######################################### QUESTÃO 8 #####################################################
// function validator(letter){

//   switch (letter.toUpperCase()) {
//     case 'C':
//       const age = prompt("Agora indique sua idade: ");

//       if(age <= 5){

//         html.innerHTML = "<b>Pode receber a vacina</b>";
//       } else{
//         html.innerHTML = "<b>Apenas crianças até 5 anos podem receber a vacina</b>";
//       }
//       break;

//     case 'A':
//       html.innerHTML = "<b>Não pode receber a vacina.<b/>";
//       break
//     default:
//       html.innerHTML = "valor inválido.";

//       break;
//   }
// }

// const input = prompt("Escreva C para CRIANÇA \nEscreva A para ADULTO: ");

// validator(input);

// ######################################### QUESTÃO 9 #####################################################
// function compra(preco, qtd){
//   if(qtd > 100){
//     console.log(qtd)
//     html.innerHTML = `<b>Total a pagar: ${((preco * qtd) * 0.95)
//       .toLocaleString('pt-BR',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</b>`;
//   } else {
//     html.innerHTML = `<b>Total a pagar: ${(preco * qtd)
//     .toLocaleString('pt-BR',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</b>`;
//   }
// }

// const preco = Number(prompt("Quer pagar quanto? "));
// const qtd = Number(prompt("Agora indique a quantidade.\nVocê receberá um desconto de 5% se levar mais de 100:"));

// compra(preco, qtd);

// ######################################### QUESTÃO 10 #####################################################
// FIXME questão não resolvida. 
/*Para checar esta questão comentar a constante html na linha 1

const vendedores = [
  {
    nome: 'Júlio César', 
    vendas:10000
  },
  {
    nome:'Angelina Jolie',
    vendas: 50000
  },
  {
    nome:'Scarlett Johansson',
    vendas: 100000
  }
];

function comissao(arr,nome,vendas){

  if(vendas > 50000){
    return (vendas * 1.12).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
  } else if(vendas  >= 30000 && vendas <= 50000){
    return (vendas * 1.095).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
  } else {
    return (vendas * 1.07).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
  }

}

// function comissao(vendas){
//   if(vendas > 50000){
//     return (vendas * 1.12)
        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
//   } else if(vendas  >= 30000 && vendas <= 50000){
//     return (vendas * 1.095)
        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
//   } else {
//     return (vendas * 1.07)
        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
//   }
// }

//console.log(comissao(5599));*/

// ######################################### QUESTÃO 11 #####################################################
// const tipoCliente = Number(prompt("Indique o tipo de cliente:\n1 - Residencial\n2 - Comercial\n3 - Industrial"));
// const consumo = Number(prompt("Agora indique o total do consumo em m³ (apenas números): "));

// function conta(cliente, consumo){
//   let taxa;
//   let valor;

//   if(cliente == 1){
//     taxa = 5;
//     valor = 0.05;

//     html.innerHTML = `<b>Consumidor residencial.<br>Você consumiu ${consumo}m³.<br> 
//       Total a pagar: ${((consumo * valor) + taxa)
//         .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}.</b>`;

//   } else if(cliente == 2){

//     if(consumo <= 80){
//       taxa = 500;

//       html.innerHTML = `<b>Consumidor comercial.<br>Seu consumo está abaixo do limite contratado, ${consumo}m³.<br>
//       Total a pagar ${taxa
//         .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})} </b>`
//     } else {
//       taxa = 500;
//       valor = 0.25;

//       html.innerHTML = `<b>Consumidor comercial.<br>Você ultrapassou o límite de 80m³ este mês.<br>
//       Consumo ${consumo}m³.<br>
//       Total a pagar ${(((consumo - 80) * valor) + taxa)
//         .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</b>`

//     }
//   } else if(cliente == 3){
//     if(consumo <= 100){
//       taxa = 800;

//       html.innerHTML = `<b>Consumidor industrial.<br>Seu consumo está abaixo do limite contratado.<br>
//       Total a pagar ${taxa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}.</b>`

//     } else {
//       taxa = 800;
//       valor = 0.04;

//       html.innerHTML = `<b>Consumidor Industrital.<br>Você ultrapssou o limite contratado.<br>
//       Consumo ${consumo}m³.<br>
//       Total a pagar ${(((consumo - 100) * valor) + taxa)
//         .toLocaleString('pt-BR', {style: 'currency', currency: "BRL", minimumFractionDigits: 2})}</b>`
//     }
//   } else if(cliente != 1 || cliente != 2 || cliente != 3){
//     html.innerHTML = `<b>Tipo de cliente inválido.</b>`
//   }
// }

// conta(tipoCliente, consumo);

// ######################################### QUESTÃO 12 #####################################################
//let plano = prompt("Indique o novo plano do funcionário:\nA - 10%\nB - 15%\nC - 20%");
// let salario = prompt("Indique o salário do colaborador:");

// switch (plano.toUpperCase()) {
//   case 'A':
//     html.innerHTML = `<b>O novo salário do colaborador será ${(salario * 1.10)
//       .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</b>`;
//     break;

//   case 'B':
//     html.innerHTML = `<b>O novo salário do colaborador será ${(salario * 1.15)
//       .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}.</b>`
//     break

//   case 'C':
//     html.innerHTML = `<b>O novo salário do colaborador será ${(salario * 1.20)
//       .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</b>`

//   default:
//     html.innerHTML = `<b>Plano não encontrado.</b>`
//     break;
// }
// ######################################### QUESTÃO 13 #####################################################
// const codProduto = Number(prompt(
//   "Indique o código do produto:\n1 - Hortifruti; 2 - Laticíneos; 3 - Carnes;\n4 - Peixes; 5 - Aves; 6 - Ovos."
// ));
// const precoCusto = Number(prompt("Informe o valor de custo do produto (use números inteiros, desconsidere zeros após a vírgula.): "));
// let precoFinal;

// switch (codProduto) {
//   case 1:
//     precoFinal = precoCusto * 1.8;

//     html.innerHTML = `<b>O preço do produto será ${precoFinal
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`;

//     break
//   case 2:
//     precoFinal = precoCusto * 1.8;

//     html.innerHTML = `<b>O preço do produto será ${precoFinal
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`;

//     break
//   case 3:
//     precoFinal = precoCusto * 2;
//     html.innerHTML = `<b>O preço do produto será ${precoFinal
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`;

//     break
//   case 4:
//     precoFinal = precoCusto * 2;
//     html.innerHTML = `<b>O preço do produto será ${precoFinal
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`;

//     break
//   case 5:
//     precoFinal = precoCusto * 1.9;
//     html.innerHTML = `<b>O preço do produto será ${precoFinal
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`;

//     break
//   case 6:
//     precoFinal = precoCusto * 1.9;
//     html.innerHTML = `<b>O preço do produto será ${precoFinal
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`;

//     break
//   default:
//     html.innerHTML = "<b>Código do produto não encontrado</b>";
// }
// ######################################### QUESTÃO 14 #####################################################
// function posto(cod, qtd) {
//   let codigo = Number(cod);
//   let litros = Number(qtd);
//   let gasolina;
//   let alcool;

//   switch (codigo) {
//     case 1:
//       if (litros <= 20) {
//         alcool = 316 / 100;
//         html.innerHTML = `<b>Combustível escolhido: Álcool - ${alcool
//           .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}. </br>

//           ${litros} litros. Total a pagar ${(alcool * litros)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}.`;
//       } else {
//         alcool = 314 / 100
//         html.innerHTML = `<b>Combustível escolhido: Álcool - ${alcool
//           .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. </br>

//           ${litros} litros. Total a pagar ${(alcool * litros)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}`;
//       }
//       break;

//     case 2:
//       if (litros <= 30) {
//         gasolina = 420 / 100;

//         html.innerHTML = `<b>Combustível escolhido: Gasolina - ${gasolina
//           .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}. </br>

//         ${litros} litros. Total a pagar ${(gasolina * litros)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}`;

//       } else {
//         gasolina = 419 / 100;

//         html.innerHTML = `<b>Combustível escolhido: Gasolina - ${gasolina
//           .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}. </br>

//         ${litros} litros. Total a pagar ${(gasolina * litros)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}`;
//       }
//       break

//     default:
//       html.innerHTML = "<b>Valor inválido.</b>";
//       break;
//   }
// }

// const codigo = prompt("Escolha: 1 - Álcool ou 2- Gasolina: ")
// const qtd = prompt('Indique quantos litros você deseja: ');
// posto(codigo, qtd);