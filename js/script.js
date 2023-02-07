
function resultadoIMC(resultado){
    var img = document.getElementById('idImg')
    switch (true) {
        case resultado < 18.5:
            idImg.src = "img/muitoMagro.jpg"
            document.getElementById('idTexto').innerHTML="Seu imc está abaixo do peso ideal"
            document.getElementById('idIMC').innerHTML=  "Seu IMC é de: " + resultado
            break;
        case resultado >= 18.5 && resultado <= 24.9:
            idImg.src = "img/corpoSaudavel.jpg"
            document.getElementById('idTexto').innerHTML="Você está saudável"
            document.getElementById('idIMC').innerHTML=  "Seu IMC é de: " + resultado
            break;
        case resultado >= 25.0 && resultado <= 29.9:
            idImg.src = "img/sobrePeso.jpg"
            document.getElementById('idTexto').innerHTML="Você está com sobrepeso"
            document.getElementById('idIMC').innerHTML= "Seu IMC é de: " + resultado
            break;
        case resultado >= 30.0 && resultado <=34.9:
            idImg.src = "img/obesidade1.png"
            document.getElementById('idTexto').innerHTML="Você possui obesidade grau 1"
            document.getElementById('idIMC').innerHTML=  "Seu IMC é de: " + resultado
            break;
        case resultado >= 35.0 && resultado <= 39.9:
            idImg.src = "img/obesidade2.jpg"
            document.getElementById('idTexto').innerHTML="Você possui obesidade grau 2"
            document.getElementById('idIMC').innerHTML=  "Seu IMC é de: " + resultado
            break;
        case resultado >= 40:
            idImg.src = "img/obesidade3.jpg"
            document.getElementById('idTexto').innerHTML="Você possui obesidade grau 3"
            document.getElementById('idIMC').innerHTML=  "Seu IMC é de: " + resultado
            break;
    }
}

function validaCampo(dadosPessoa) {
    
    if (!dadosPessoa.nome) {
        passou = false
        return document.getElementById('idTexto').innerHTML = "Insira o seu nome"
    }

    if (!dadosPessoa.idade) {
        passou = false
        return document.getElementById('idTexto').innerHTML = "Insira a sua idade"
    }

    if (!dadosPessoa.peso) {
        passou = false
        return document.getElementById('idTexto').innerHTML = "Insira o seu peso"
    }

    if (!dadosPessoa.altura) {
        passou = false
        return document.getElementById('idTexto').innerHTML="Insira a sua altura"
    }
}

function ajustaAltura(altura){
    let a = altura.toString();
    var beforeDot = a.substring(0, 1);
    var afterDot = a.substring(1, 3);
    return altura = parseFloat(beforeDot + "." + afterDot);
  }

function limpaForm(){
    nome = document.getElementById('idNome').value = null
    idade = document.getElementById('idIdade').value  = null
    peso = document.getElementById('idPeso').value  = null
    altura = document.getElementById('idAltura').value  = null
    document.getElementById('idIMC').innerHTML = ""
    document.getElementById('idTexto').innerHTML="Formulário limpo!"
    idImg.src = "img/balança.jpg"
}

document.getElementById('idCalcular').onclick = function(){
    let dadosPessoa = {
        nome: document.getElementById('idNome').value,
        idade: document.getElementById('idIdade').value,
        peso: document.getElementById('idPeso').value,
        altura: document.getElementById('idAltura').value
    };

    if (!validaCampo(dadosPessoa)) {
        if (dadosPessoa.altura > 100){
            dadosPessoa.altura = ajustaAltura(dadosPessoa.altura)
            var resultado = (dadosPessoa.peso / (dadosPessoa.altura * dadosPessoa.altura)).toFixed(1);
            resultadoIMC(parseFloat(resultado))
        }
         
    }
    
}

document.getElementById('limpaForm').onclick = function(){
    limpaForm()
}

