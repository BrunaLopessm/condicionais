let nota, resultado;

function verificar(){
    nota = Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if( nota < 5){
        resultado.innerHTML = "Reprovado"
    }
    else if (nota < 7){
        resultado.innerHTML = "Recuperação"
    }
    else{
        resultado.innerHTML = "Aprovado"
    }
}

let numero01, numero02, resultado02;

function diferenca(){
    numero01 = Number(document.getElementById("numero01").value);
    numero02 = Number(document.getElementById("numero02").value);

    resultado02 = document.getElementById("resultado02");

    if (numero01>numero02){
        resultado02.innerHTML = "Resultado= "+ (numero01 - numero02)
    }
    else{
        resultado02.innerHTML = "Resultado= "+ (numero02 - numero01)
    }
}

let n1, n2, n3, n4, md;

function media(){
   n1 = Number(document.getElementById("n1").value);
   n2 = Number(document.getElementById("n2").value); 
   n3 = Number(document.getElementById("n3").value); 
   n4 = Number(document.getElementById("n4").value); 
   
   let conta = (n1+n2+n3+n4)/4;

   md = document.getElementById("md");

   if(conta >= 5){
        md.innerHTML = "Aprovado! Sua média é: " + conta;
   }
   else{
        md.innerHTML = "Reprovado! Sua média é: " + conta;
   }
}