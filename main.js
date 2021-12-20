//var nome = "Adelina Constantino";
//var idade = 40;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo.";
//alert("Bem vindo " + nome + " tem " + idade + " anos");

//alert(idade + idade2);

//console.log(nome);
//console.log(idade + idade2);

//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());

//alert(frase.replace("Japão", "Brasil"));

//*********************************************LLISTA*********************************************************************** */

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista[0]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

/********************************************************************DICIONARIO************************************ */
/*var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);*/

//var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "verde"}];
//console.log(frutas);
//console.log(frutas[1].nome);

/*********************************CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE**************************************** */
/*var idade = prompt("Qual a sua idade? ");
//var idade = 15;

if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("menor de idade");
};*/

/*var count = 0;
while (count < 5){
    console.log(count);
    //count = count + 1;
    count++
};*/
 /*
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
};*/

/*********************************DATE**************************************** */
/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());*/

/*******************************************************FUNÇÕES******************************************* */
/*function soma(n1, n2){
    return n1 + n2;
}    
//alert(soma(5,10));

function validarIdade(idade){
    var validar;
    if (idade >= 18){
        //validar = true
        return true;
    }else{
        //validar = false
        return false;
    }
    return validar;
}
var idade = prompt("ual sua idade");
console.log(validarIdade(idade));*/

/***********************BOTÃO**************************************** */
function botao(){
   // alert("Obrigado por clicar");
}
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    //window.open("https://www.google.com.br"); //abre em uma nova janela
    window.location.href = "https://www.google.com.br"; //abre na mesma janela
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mosue"
    //alert("trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}