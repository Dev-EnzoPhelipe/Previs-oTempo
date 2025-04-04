//minha chave da API
const key = "e0283766cee7e7e70be7e75409ae8042"

//Função para pegar o valor do input-cidade
function coletarvalor() {
    //buscando o valor do input no html e atribuindo a variavel cidade
    let cidade = document.querySelector(".input-cidade").value
    //imprimindo a variavel
    console.log(cidade)
    dadosAPI(cidade)
}



//Função para pegar dados da api 
async function dadosAPI(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    console.log(dados)
    dadosTela(dados)
}

function dadosTela(dados) {
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + ("°C")
    document.querySelector(".icone-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de umidade"


}