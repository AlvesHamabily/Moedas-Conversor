var id= '90';
var nome = 90;

//console.log(parseFloat(id) + nome);
let ingredientes= ['ovo', 'acucar', 'farinha']
//console.log(ingredientes);

let pessoa = {
    nome: "Guilherme",
    idade: 20,
    nascimento: '06/08/2004'
}
//console.log("nome = " + pessoa.nome, "nascimento = " + pessoa.nascimento);

let somar = (a, b) =>{ 
    let result = a+b
    return result
}
//console.log(somar(parseFloat(id), nome))

/*
for(let i of ingredientes){
    console.log("- Ingrediente: " + i)
}*/

/*function aviso(){
    alert("Bem-Vindo(a) ao Conversor de moedas!");
}
*/
//variavel para selecioar o botao  
//var botao = document.querySelector("#botao");
//add evento somente ao clicar requerendo o botao pela vriavel 
document.addEventListener("mouseover", () =>{
    aviso()
});

// add eventos e trabalhar  com campos de inserção de dados:
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    console.log("Caampo USD diz: "+ usdInput.value)
} )

brlInput.addEventListener("keyup", () => {
    console.log("Campo BRL diz: " + brlInput.value)
} )

