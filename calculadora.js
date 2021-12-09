var num1 = 0;
var operacao = "";
var num2= 0; 


function resolve(num1, qual, num2){
    switch (qual){
        case "+" : return num1 + num2; break
        case "-" : return num1 - num2; break
        case "*" : return num1 * num2; break
        case "/" :
            if(num2!=0)
           return num1 / num2;
           return 0; //erro 
    }
}
function trataOperacao(qual){
    if(operacao == ""){
        num1 = parseFloat(document.getElementById("visor").value);
        operacao = qual;
    }
    else{
        num2 = parseFloat(document.getElementById("visor").value);
        resultado = resolve(num1,qual,num2);
        document.getElementById("visor").value = resultado;
    }
}

function trataBotao(componente){
    texto = componente.innerHTML;
}

function exibirMensagem(nmr){
    texto = nmr;
   
    if(texto == "C")
        document.getElementById("visor").value = "";

    else if(texto == "^"){
       trataOperacao(texto)
    }
    else if(texto == "%"){
        trataOperacao(texto)
    }
    else if(texto == "/"){
        trataOperacao(texto)
    }
    else if(texto == "+"){
        trataOperacao(texto)
    }
    else if(texto == "-"){
        trataOperacao(texto)
    }
    else if(texto == "*"){
        trataOperacao(texto)
    }
    else if(texto == "="){
        alert(texto)
    }
    else
    document.getElementById("visor").value += nmr;
}