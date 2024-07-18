/* testes de variaveis e parâmetros:
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

//variavel para selecioar o botao  
//var botao = document.querySelector("#botao");
//add evento somente ao clicar requerendo o botao pela vriavel 
document.addEventListener("mouseover", () =>{
    aviso()
});
*/ 

//INICIO DO PROGRAMA 
// add eventos e trabalhar  com campos de inserção de dados:

let dolar = 5.4
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
   console.log("Campo USD diz: "+ usdInput.value)
   convert("usd-to-brl")
} )

brlInput.addEventListener("keyup", () => {
    console.log("Campo BRL diz: " + brlInput.value)
    convert("brl-to-usd")

} )
//formatar o vlor apos terminar de digitar 
usdInput.addEventListener("blur", () =>{
    usdInput.value = formatMoeda(usdInput.value)
})

brlInput.addEventListener("blur", () =>{
    brlInput.value  = formatMoeda(brlInput.value)
})

//inicializar a variavel com valor fixo e descrever a função:
usdInput.value = "1000,00"
convert("usd-to-brl")

//funções
function  formatMoeda(value){ //formtar os dados de entrada
    let fixedValue = fixValue(value) //ajustar valor
    //formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }

    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
    //retorno
}

function fixValue(value){ // fixar valor dado de forma a ser possivel calcular 
    let fixedValue = value.replace(",", ".") // trocar ',' por '.' no valor informado
    let floatValue = parseFloat(fixedValue) // string to number
    if(floatValue == NaN){ // ajuste de valor em casos de erros de digitação
        floatValue = 0
    }
    return floatValue
}

function convert(type){// processo de conversão da moeda
    if (type == "usd-to-brl"){
        let fixedValue = fixValue(usdInput.value)
        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlInput.value = formatMoeda(result)
       
    }
    if (type == "brl-to-usd"){
        let fixedValue  = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatMoeda(result)

    }
}