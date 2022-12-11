// let html = document.getElementById("tela")


// ######################################### QUESTÃO 1 #####################################################
// function division(numA, numB){
//   let operation;

//   if(!numB || numB <= 0){
//     alert("Impossível dividir pelo número escolhido, indique um número válido.");
//     numB = Number(prompt("Indique um novo número para o DIVISOR: "));

//     operation = numA / numB;

//     return html.innerHTML = `<b>O resultado da operação é ${operation}</b>`;
//   } else{

//     operation = numA / numB
//     return html.innerHTML = `<b>O resultado da DIVISÃO é ${operation}<b>`;
//   }
// }

// const dividendo = Number(prompt("Indique um número para o DIVIDENDO: "));
// const divisor = Number(prompt("Agora escolha o DIVISOR: "));

// division(dividendo, divisor)

// ######################################### QUESTÃO 2 #####################################################

// function triangle(sideA, sideB, sideC){

//   if((sideA > sideB + sideC) || (sideB > sideA + sideC) || (sideC > sideA + sideB)){
//     return html.innerHTML = "<b>Não é um triângulo</b>";

//   } else if(sideA === sideB && sideB === sideC ){
//     return html.innerHTML = "<b>Triângulo Equilátero</b>";

//   }  else if(sideA === sideB || sideA === sideC || sideB === sideC){
//     return html.innerHTML = "<b>Triângulo isóceles</b>";

//   } else {
//     return html.innerHTML = "<b>Triângulo Escaleno</b>";
//   }
// } 

// const sideA = Number(prompt("Indique um lado para o triângulo: "));
// const sideB = Number(prompt("Indique um segundo lado para o triângulo: "));
// const sideC = Number(prompt("Indique um terceiro lado para o triângulo: "));

// triangle(sideA, sideB, sideC);


// ######################################### QUESTÃO 3 #####################################################

// function descontos(valorTotal){

//   if(valorTotal <= 500){
//     const desconto10 = valorTotal * 0.9;
//     return html.innerHTML = `<b>O valor da compra é R$ ${valorTotal}, o desconto será de 10%, R$ ${(10/100) * valorTotal}. Total a pagar: R$ ${desconto10}</b>`;

//   } else {
//     const desconto15= valorTotal * 0.85
//     return html.innerHTML = `<b>O valor da compra é R$ ${valorTotal}, o desconto será de 15%, R$ ${(15/100) * valorTotal}. Total a pagar: R$ ${desconto15}</b>`;

//   }
// }

// const valorCompra = Number(prompt("Indique o valor total das suas compras: "));

// descontos(valorCompra);

// ######################################### QUESTÃO 4 #####################################################

// function pagamento(pagamento, totalGasto) {

//   if (pagamento == 1) {
//     html.innerHTML = `<b>Pagamento a vista com 10% de desconto.<br>Total a pagar ${(totalGasto * 0.90)
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//   } else if (pagamento == 2) {
//     html.innerHTML = `<b>Pagamento em 2x. Pacelas no valor de ${(totalGasto / 2)
//       .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//   } else if (pagamento == 3) {
//     if (totalGasto > 100) {
//       let pmt = Number(prompt(`Escolha em quantas vezes você deseja parcelar. (de 3x a 10x): `));
//       let CF = 0.03 / (1 - (1 / Math.pow(1 + 0.03, pmt))); //fórmula para obter o coeficiente financeiro

//       switch (pmt) {

//         case 3:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break
//         case 4:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break
//         case 5:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break
//         case 6:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break

//         case 7:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break

//         case 8:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break

//         case 9:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break

//         case 10:
//           html.innerHTML = `<b>Parcelamento de R$ ${totalGasto} em ${pmt}x. Total a pagar ${(totalGasto * CF)
//             .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</b>`

//           break

//         default:

//           html.innerHTML = `<b>Opção inválida.</b>`
//           break;
//       }

//     } else {
//       html.innerHTML = `<b>Apenas compras acima de R$ 100 podem ser parcelada em mais de duas vezes.</b>`
//     }
//   }
// }

// const tipoPagamento = Number(prompt('Indique a forma de pagamento:\n1 - a vista com 10% off;\n2 - 2x sem juros\n3 - de 3x até 10x com juros'));
// const totalGasto = Number(prompt('Total gasto\n(ex: 1000.99)'));

// pagamento(tipoPagamento, totalGasto);

// ######################################### QUESTÃO 5 #####################################################

// function asterisco (linhas, colunas){
//   Utilizar o CONSOLE para conferir esta questão / comentar linha 1
//   let aux = ""
//   for(let i = 1; i <= linhas; i++){
//     for(let j = 1; j <= colunas; j++){
//       aux += '*'
//     }
//     console.log(aux);
//     aux = ""
//   }
// }
// let linhas ;
// let colunas ;
// asterisco(linhas, colunas)

// ######################################### QUESTÃO 6 #####################################################

// function potencia (base, exponte){
//   let resultado = Math.pow(base, exponte)
//   html.innerHTML = `<b>O resultado é ${resultado}`;
// }

// const b = Number(prompt("Indique a base: "));
// const n = Number(prompt("indique o expoente: "));

// potencia(b, n)


// ######################################### QUESTÃO 7 #####################################################
// function anonima (arr, valor){
// //   Utilizar o CONSOLE para conferir esta questão / comentar linha 1
//   let number = arr.findIndex(item => item === valor);

//   if(number === -1){
//     return console.log("Valor desejado não existe.")
//   } else {
//     return console.log(`O valor ${valor}, está na posição ${number}`)
//   }
// }
// // Passar valores (input) aqui:
// anonima([10, 20, 30, 40], 100);

// ######################################### QUESTÃO 8 #####################################################
// TODO terminar esta
function velicidadeMedia(velocidadeFinal, tempo, aceleracao){
  
}