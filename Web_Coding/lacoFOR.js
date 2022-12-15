let html = document.getElementById("tela");

// //######################################### QUESTÃO 1 #####################################################
//FIXME questão incompleta
// let num = Number(prompt("indique um número para encontar seu fatorial: "))
// let numeroCalc = Number(num)
// let fat = 1;

// while (numeroCalc >= 2) {
//   fat = fat * numeroCalc;
//   numeroCalc--;
// }

// html.innerHTML = `<b>O fatórial de ${num} é ${fat}</b>`;

//######################################### QUESTÃO 2 #####################################################
//   Utilizar o CONSOLE para conferir esta questão / comentar linha 1
// const clientes = [
//   { id: 1, nome: "Júlio", compras: 100 },
//   { id: 2, nome: "João", compras: 200 },
//   { id: 3, nome: "Mateus", compras: 500 },
//   { id: 4, nome: 'Andersom', compras: 50 },
//   { id: 5, nome: 'José', compras: 75 },
//   { id: 6, nome: 'Júlia', compras: 390 },
//   { id: 7, nome: "Rafael", compras: 150 },
//   { id: 8, nome: "Joana", compras: 250 },
//   { id: 9, nome: "Fulano", compras: 80 },
//   { id: 10, nome: "Cicrano", compras: 99 },
//   { id: 11, nome: "Beltrano", compras: 180 },
//   { id: 12, nome: "Hermenegildo", compras: 21 },
//   { id: 13, nome: "Cruela Del Vil", compras: 1000 },
//   { id: 14, nome: "Yasmim", compras: 360 },
//   { id: 15, nome: "Nicólas", compras: 60 }
// ];
//            ### WHILE ###
// const length = clientes.length;
// let index = 0;

// while (index <= length -1) {

//   if (clientes[index].compras <= 100) {
//     console.log(`Olá, ${clientes[index].nome}. Você ganhou um cupom de 10% para gastar em nossa Loja.`);

//   } else {
//     console.log(`Olá, ${clientes[index].nome}, você ganhou um cupom de 15% para gastar em nossa loja.`);
//   }

//   index++
// }

//         ### FOR ###


// for(let i = 0; i - clientes.length; i++){
//   if(clientes[i].compras <= 100){
//     console.log(`Olá, ${clientes[i].nome}, Você ganhou um cupom de 10% para gastar em nossa loja.`)
//   } else {
//     console.log(`Olá, ${clientes[i].nome}, você ganhou um cupom de 15% para gastar em nossa loja.`)
//   }
// };

// ######################################### QUESTÃO 3 #####################################################

// let base = parseInt(prompt("Digite um número natural inteiro: "));
// let expoente = parseInt(prompt("Digite um número natural inteiro como expoente: "));

// //        ### WHILE ###
// let contador = 0;
// let resultado = 1;

// function potencia(base, expoente) {

//   let resultado = 1;

//   if (isNaN(base) || isNaN(expoente)) {
//     return html.innerHTML = `<b>Você precisa indicar um número válido.</b>`;
//   }

//   if(base === 0 && expoente === 0){
//     return html.innerHTML = `<b>Zero elevado a zero é indefinido.</b>`;
//   }

//   if (base <= 0 || expoente <= 0) {
//     return html.innerHTML = `<b>Favor, usar apenas números positivos.</b>`;
//   }

//   while(contador < expoente){
//     resultado *= base
//     contador++
//   }

//   return html.innerHTML = `<b>o resultado é ${resultado}</b>`
// }

// potencia(base, expoente)


//        ### FOR ###
// function potencia(base, expoente) {

//   let resultado = 1;

//   if (isNaN(base) || isNaN(expoente)) {
//     return html.innerHTML = `<b>Você precisa indicar um número válido.</b>`;
//   }

//   if(base === 0 && expoente === 0){
//     return html.innerHTML = `<b>Zero elevado a zero é indefinido.</b>`;
//   }

//   if (base <= 0 || expoente <= 0) {
//     return html.innerHTML = `<b>Favor, usar apenas números positivos.</b>`;
//   }

//   for (let i = 0; i < expoente; i++) {
//     resultado *= base;
//   }

//   console.log(resultado)
//   return html.innerHTML = `<b>o resultado é ${resultado}</b>`
// }

// potencia(base, expoente)

// ######################################### QUESTÃO 4 #####################################################

// let otimo = 0, bom = 0, regular = 0, acumuladorIdade = 0, acumuladorRepostas = 0;
// let i = 1, entrevistados = 4;

// //        ### WHILE ###
// while (i <= entrevistados) {
//   let idade = parseInt(prompt("Qual sua idade?"));
//   let opiniao = prompt("O que você achou do filme?\n3 - Ótimo;\n2 - Bom; \n1 - Regular.");

//   if (opiniao.toLowerCase() == "ótimo" || opiniao == "otimo" || opiniao == 3) {
//     otimo++;
//     acumuladorIdade += idade

//   } else if (opiniao.toLowerCase() == "bom" || opiniao == 2) {
//     bom++;

//   } else if (opiniao.toLowerCase() == "regular" || opiniao == 1) {
//     regular++;

//   } else {
//     html.innerHTML = "Opção inválida.";
//   }
//   acumuladorRepostas++

//   console.log(acumuladorRepostas)

//   i++
// }

// html.innerHTML = `<b>${otimo} pessoas avaliaram o filme como Ótimo.</b><br>
//                   <b>${bom} pessoas avaliaram o filme como Bom</b><br>
//                   <b>${regular} pessoas avaliaram o filme como Regular.</b><br><br>
//                   <b>A média de idade das pessoas que avaliaram o filme como ótimo é ${(acumuladorIdade / otimo).toFixed(2)}</b><br>
//                   <b>${((bom / acumuladorRepostas) * 100).toFixed(2)}% acharam o filme BOM.</b>`


//        ### FOR ###
// for (i; i <= entrevistados; i++) {
//   let idade = parseInt(prompt("Qual sua idade?"));
//   let opiniao = prompt("O que você achou do filme?\n3 - Ótimo;\n2 - Bom; \n1 - Regular.");

//   if (opiniao.toLowerCase() == "ótimo" || opiniao == "otimo" || opiniao == 3) {
//     otimo++;
//     acumuladorIdade += idade

//   } else if (opiniao.toLowerCase() == "bom" || opiniao == 2) {
//     bom++;

//   } else if (opiniao.toLowerCase() == "regular" || opiniao == 1) {
//     regular++;

//   } else {
//     console.log("Opção inválida.");
//   }
//   acumuladorRepostas++
//   console.log(acumuladorRepostas)
// }

// html.innerHTML = `<b>${otimo} pessoas avaliaram o filme como Ótimo.</b><br>
//                   <b>${bom} pessoas avaliaram o filme como Bom</b><br>
//                   <b>${regular} pessoas avaliaram o filme como Regular.</b><br><br>
//                   <b>A média de idade das pessoas que avaliaram o filme como ótimo é ${(acumuladorIdade / otimo).toFixed(2)}</b><br>
//                   <b>${((bom / acumuladorRepostas) * 100).toFixed(2)}% acharam o filme BOM.</b>`

// ######################################### QUESTÃO 5 #####################################################
// let sair;
// let numeros = [];

// ### WHILE ###
// while(sair != 1){
//   let num = Number(prompt("Digite um número:"));
//   numeros.push(num);
//   sair = prompt("Aperte 1 para sair.\nOu digite qualquer outra tecla.");

// }

// let produto = numeros.reduce((acc, cur) => acc * cur);

// html.innerHTML = `<b>O produto de todos os numeros digitados é: ${produto.toFixed(2)} </b>`

//      ### FOR ###

// for (; sair != 1;) {
//   let num = Number(prompt("Digite um número:"));
//   numeros.push(num);
//   sair = Number(prompt("Sair?\n1 - Sim\n2 - Não"));

// }

// let produto = numeros.reduce((acc, cur) => acc * cur, 1);

// html.innerHTML = `<b>O produto de todos os numeros digitados é: ${produto.toFixed(2)} </b>`


// ######################################### QUESTÃO 6 #####################################################

// let acumuladorSalario = 0;
// let i = 0;
// let maiorSalario = 0;
// let menorSalario = 0;
// let qtdFuncionarios = Number(prompt("Quantos funcionários há na empreesa?"));
// let nome;
// let salario;

// while(i < qtdFuncionarios){
//     nome = prompt("Nome do funcionário:");
//     salario = Number(prompt("Salário do funcionário: "))

//     if (i == 0){
//         menorSalario = salario;
//         maiorSalario = salario;
//     } else {
//         if(salario > maiorSalario){
//             maiorSalario = salario;
//         }else if (salario < menorSalario){
//             menorSalario = salario
//         }
//     }
//     acumuladorSalario += salario;

//     i++
// }

// html.innerHTML = `<b>A média dos salários é de ${acumuladorSalario/qtdFuncionarios}<br>
//                     Maior salário: ${maiorSalario}<br>
//                     Menor salario: ${menorSalario}</b>`

// ### FOR ###

// for (; i < qtdFuncionarios; i++) {
//     nome = prompt("Nome do funcionário:");
//     salario = Number(prompt("Salário do funcionário: "))

//     if (i == 0) {
//         menorSalario = salario;
//         maiorSalario = salario;
//     } else {
//         if (salario > maiorSalario) {
//             maiorSalario = salario;
//         } else if (salario < menorSalario) {
//             menorSalario = salario
//         }
//     }
//     acumuladorSalario += salario;

// }

// html.innerHTML = `<b>A média dos salários é de ${acumuladorSalario / qtdFuncionarios}<br>
//                     Maior salário: ${maiorSalario}<br>
//                     Menor salario: ${menorSalario}</b>`
// ######################################### QUESTÃO 7 #####################################################

//   Utilizar o CONSOLE para conferir esta questão / comentar linha 1
// let alunos = [
// { "nome": "Carla Nair Cardoso", "idade": 18, "altura": 1.57 },
// { "nome": "Rosângela Antonella Pinto", "idade": 20, "altura": 1.73 },
// { "nome": "Eloá Lara Lívia Ramos", "idade": 20, "altura": 1.65 },
// { "nome": "Luna Rosângela Novaes", "idade": 18, "altura": 1.72 },
// { "nome": "Brenda Alice Castro", "idade": 20, "altura": 1.66 },
// { "nome": "Fabiana Elisa Heloise Moraes", "idade": 18, "altura": 1.78 },
// { "nome": "Silvana Ester Maya Gonçalves", "idade": 19, "altura": 1.54 },
// { "nome": "Sophia Emily da Conceição", "idade": 18, "altura": 1.82 },
// { "nome": "Igor Diogo Martin Souza", "idade": 18, "altura": 1.78 },
// { "nome": "Iago Sérgio Rafael Corte Real", "idade": 18, "altura": 1.67 },
// { "nome": "Leandro Nelson Elias Duarte", "idade": 19, "altura": 1.84 },
// { "nome": "Gael Augusto Mateus da Paz", "idade": 18, "altura": 1.94 },
// { "nome": "Benjamin Murilo Cavalcanti", "idade": 21, "altura": 1.83 },
// { "nome": "Miguel Lucas Luís da Rocha", "idade": 21, "altura": 1.94 },
// { "nome": "Liz Rosângela Costa", "idade": 19, "altura": 1.58 },
// { "nome": "Rayssa Isis Ana Assis", "idade": 21, "altura": 1.51 },
// { "nome": "Nicolas Sebastião Matheus Melo", "idade": 20, "altura": 1.72 },
// { "nome": "Luan Luiz Nascimento", "idade": 21, "altura": 1.81 },
// { "nome": "Valentina Letícia Peixoto", "idade": 21, "altura": 1.72 },
// { "nome": "Vitória Emily Rezende", "idade": 21, "altura": 1.50 },
// { "nome": "Mariane Betina Luzia Fogaça", "idade": 21, "altura": 1.70 },
// { "nome": "Tatiane Fátima Figueiredo", "idade": 21, "altura": 1.61 },
// { "nome": "Davi Martin Sales", "idade": 20, "altura": 1.68 },
// { "nome": "Carlos Eduardo Henry da Conceição", "idade": 20, "altura": 1.60 },
// { "nome": "Milena Alessandra Figueiredo", "idade": 20, "altura": 1.74 },
// { "nome": "Nair Alice Bernardes", "idade": 20, "altura": 1.56 },
// { "nome": "Bruna Helena Alana Nunes", "idade": 20, "altura": 1.62 },
// { "nome": "Marli Teresinha Teixeira", "idade": 19, "altura": 1.60 },
// { "nome": "Patrícia Fabiana Heloisa Nogueira", "idade": 19, "altura": 1.72 },
// { "nome": "Osvaldo Cauê Yuri da Rocha", "idade": 19, "altura": 1.84 },
// { "nome": "Vitor Enrico Freitas", "idade": 19, "altura": 1.95 },
// { "nome": "Brenda Catarina Andreia Pinto", "idade": 19, "altura": 1.70 }
// ]
// let i = 0;
// let aux = 0;
// let idadeMedia = 0;
// let alturaMedia = 0;
// let acumuladorAltura = 0;
// let acumuladorIdade = 0

// while (i < alunos.length) {
//     if (alunos[i].altura < 1.70) {
//         idadeMedia += alunos[i].idade;
//         acumuladorAltura++
//     }

//     if (alunos[i].idade > 20) {
//         alturaMedia += alunos[i].altura;
//         acumuladorIdade++
//     }

//     i++
// }


// console.log(`A idade média dos alunos com menos de 1,7m e ${(idadeMedia / acumuladorAltura.toFixed(2))}.
// \nA altura média dos alunos com mais de 20 anos é de ${(alturaMedia / acumuladorIdade).toFixed(2)}`);

// ### FOR ###

// for (i; i < alunos.length; i++) {
//     if (alunos[i].altura < 1.70) {
//         idadeMedia += alunos[i].idade;
//         acumuladorAltura++
//     }

//     if (alunos[i].idade > 20) {
//         alturaMedia += alunos[i].altura;
//         acumuladorIdade++
//     }

// }

// console.log(`A idade média dos alunos com menos de 1,7m e ${idadeMedia / acumuladorAltura.}.
// \nA altura média dos alunos com mais de 20 anos é de ${(alturaMedia / acumuladorIdade).toFixed(2)}`);

// ######################################### QUESTÃO 8 #####################################################

//    ### WHILE ###
// let index = 0;
// let comprar = 0
// let nome;
// let compras;

// while (index < 3) {

//   nome = prompt("qua nome")
//   compras = prompt("valor das compras")

//   if (!nome) {
//     html.innerHTML = `<b>Você precisa indicar um cliente válido.</b>`
//     break
//   } else if (compras < 1000) {
//     comprar = (compras * 0.10)
//     console.log(`Cliente ${nome}, você tem um bônus de 10%`)
//   } else {
//     comprar = comprar * 0.15
//     console.log(`Cliente ${nome}, você tem um bônus de 15%`)
//   }
//   index++
// };

// ######################################### QUESTÃO 9 #####################################################

// let idade
// let acumuladorBeber = 0, acumuladorCrianca = 0; acumuladorAborrecente = 0, acumuladorAdulto = 0, acumuladorIdoso = 0

// while(true){

//   idade = Number(prompt("Quantos anos você tem?"));

//   if(!idade){
//     html.innerHTML = `<b>Você precisa indicar uma idade.</b>`
//     throw new Error("Sem idade")
//   } else if(idade < 0){
//     break
//   }else if(idade > 0 && idade <=5){
//     acumuladorBeber++;
//   } else if(idade >= 6 && idade <= 13){
//     acumuladorCrianca++
//   } else if(idade >= 14 && idade <= 17){
//     acumuladorAborrecente++
//   } else if(idade >= 18 && idade <=59){
//     acumuladorAdulto++;
//   } else if(idade >= 60){
//     acumuladorIdoso++
//   }
// };

// html.innerHTML = `<b> Pessoas de 0 a 5 anos = ${acumuladorBeber}<br>
// <b> Pessoas de 6 a 13 anos = ${acumuladorCrianca}<br>
// <b> Pessoas de 6 a 13 anos = ${acumuladorAborrecente}<br>
// <b> Pessoas de 6 a 13 anos = ${acumuladorAdulto}<br>
// <b> Pessoas de 6 a 13 anos = ${acumuladorIdoso}<br>
// </b>`

// ######################################### QUESTÃO 10 #####################################################


// let otimo = 0, bom = 0, regular = 0, acumuladorIdade = 0, acumuladorRepostas = 0;
// let i = 0
// let idade;
// let opiniao;

// do {
//   i++
//   idade = parseInt(prompt("Qual sua idade?"));
//   opiniao = prompt("O que você achou do filme?\n3 - Ótimo;\n2 - Bom; \n1 - Regular.");

//   if (opiniao.toLowerCase() == "ótimo" || opiniao == "otimo" || opiniao == 3) {
//     otimo++;
//     acumuladorIdade += idade

//   } else if (opiniao.toLowerCase() == "bom" || opiniao == 2) {
//     bom++;

//   } else if (opiniao.toLowerCase() == "regular" || opiniao == 1) {
//     regular++;

//   } else {
//     html.innerHTML = "Opção inválida.";
//   }
//   acumuladorRepostas++
  
//   console.log(acumuladorRepostas)

// } while (i < 5);

// html.innerHTML = `<b>${otimo} pessoas avaliaram o filme como Ótimo.</b><br>
//                   <b>${bom} pessoas avaliaram o filme como Bom</b><br>
//                   <b>${regular} pessoas avaliaram o filme como Regular.</b><br><br>
//                   <b>A média de idade das pessoas que avaliaram o filme como ótimo é ${acumuladorIdade / otimo}</b><br>
//                   <b>${((bom / acumuladorRepostas) * 100).toFixed(2)}% acharam o filme BOM.</b>`
