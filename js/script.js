
function resultadoIMC(resultado){
    var img = document.getElementById('idImg')
    if(resultado < 18.5){
        idImg.src = "img/muitoMagro.jpg"
        document.getElementById('idTexto').innerHTML="Seu imc está abaixo do peso ideal"
    } else if (resultado >= 18.5 && resultado <= 24.9){
        idImg.src = "img/corpoSaudavel.jpg"
        document.getElementById('idTexto').innerHTML="Você está saudável"
    } else if(resultado >= 25.0 && resultado <= 29.9){
        idImg.src = "img/sobrePeso.jpg"
        document.getElementById('idTexto').innerHTML="Você está com sobrepeso"
    } else if(resultado >= 30.0 && resultado <=34.9) {
        idImg.src = "img/obesidade1.png"
        document.getElementById('idTexto').innerHTML="Você possui obesidade grau 1"
    } else if (resultado >= 35.0 && resultado <= 39.9){
        idImg.src = "img/obesidade2.jpg"
        document.getElementById('idTexto').innerHTML="Você possui obesidade grau 2"
    } else if (resultado >= 40) {
        idImg.src = "img/obesidade3.jpg"
        document.getElementById('idTexto').innerHTML="Você possui obesidade grau 3"
    } else {
        document.getElementById('idTexto').innerHTML="Deu algo errado"
    }
}

function validaCampo(informacoes) {
    debugger
    if (!informacoes.nome) {
        passou = false
        return document.getElementById('idTexto').innerHTML = "Insira o seu nome"
    }

    if (!informacoes.idade) {
        passou = false
        return document.getElementById('idTexto').innerHTML = "Insira a sua idade"
    }

    if (!informacoes.peso) {
        passou = false
        return document.getElementById('idTexto').innerHTML = "Insira o seu peso"
    }

    if (!informacoes.altura) {
        passou = false
        return document.getElementById('idTexto').innerHTML="Insira a sua altura"
    }
}

function limpaForm(){
    nome = document.getElementById('idNome').value = null
    idade = document.getElementById('idIdade').value  = null
    peso = document.getElementById('idPeso').value  = null
    altura = document.getElementById('idAltura').value  = null
    document.getElementById('idTexto').innerHTML="Formulário limpo!"
    idImg.src = "img/balança.jpg"
}

document.getElementById('idCalcular').onclick = function(){
    let informacoes = {
        nome: document.getElementById('idNome').value,
        idade: document.getElementById('idIdade').value,
        peso: document.getElementById('idPeso').value,
        altura: document.getElementById('idAltura').value
    };
    
    if (!validaCampo(informacoes)) {
        var resultado = (peso / (altura * altura)).toFixed(1);
        resultadoIMC(resultado)  
    }
    
    
}

document.getElementById('limpaForm').onclick = function(){
    limpaForm()
}