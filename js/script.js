document.getElementById('idCalcular').onclick = function(){
    var nome = document.getElementById('idNome').value
    var idade = document.getElementById('idIdade').value
    var peso = document.getElementById('idPeso').value
    var altura = document.getElementById('idAltura').value

    if (!idade || !peso || !altura) {
        return document.getElementById('idTexto').innerHTML="Necessário preencher todos os campos!"
    }
    
    var resultado = (peso / (altura * altura)).toFixed(1);
    console.log(resultado);

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
    } else {
        idImg.src = "img/obesidade3.jpg"
        document.getElementById('idTexto').innerHTML="Você possui obesidade grau 3"
    } 
}