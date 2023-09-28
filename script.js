// Capturar evento de submit do formulário
const eventoClique = document.getElementById('btn')
// Parar envio do form (utilizar evento)
eventoClique.addEventListener('click', function (Event) { // Quando acontecer o evento 'click' a função é executada
    Event.preventDefault(); // arada do envio dos forms
    calcular(); // Chamando a função 
});

// Registrar valores
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

// Função pra calcular
const calcular = () => {
    const imc = peso.value / (altura.value * altura.value) // Recebe o valor do peso e altura p/ fazer o cálculo
    const valorImc = imc.toFixed(2) // Para ficar só 2 números flutuantes
    resultado.innerHTML = valorImc // Coloca o valor lá no resultado (<p> do html)
    classificar(valorImc) // Chama a função "classificar" e passa o valorImc como argumento
    return
}

const resultado = document.getElementById('resultadoIMC'); // Pega o elemento do html e salva na constante criada 
const classificacao = document.getElementById('classificacaoIMC'); // Pega o elemento do html e salva na constante

// Estrutura condicional para verificar a classificação de acordo com o resultado obtido 
const classificar = (valorImc) => {
    if (valorImc < 18.5) {
        classificacao.innerHTML = 'Abaixo do peso'
    } else if (valorImc > 18.5 && valorImc < 24.9) {
        classificacao.innerHTML = 'Peso normal'
    } else if (valorImc > 25 && valorImc < 29.9) {
        classificacao.innerHTML = 'Sobrepeso'
    } else if (valorImc > 30 && valorImc < 34.9) {
        classificacao.innerHTML = 'Obesidade grau 1'
    } else if (valorImc > 35 && valorImc < 39.9) {
        classificacao.innerHTML = 'Obesidade grau 2'
    } else if (valorImc > 40) {
        classificacao.innerHTML = 'Obesidade grau 3'
    } 
}