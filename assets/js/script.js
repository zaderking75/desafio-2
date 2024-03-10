function toggle(marco) {

    if (marco.style.border == '2px solid red') {
        marco.style.border = 'none';
    } else {
        marco.style.border = '2px solid red';
    }
}


function totaldelasuma() {

    var Uno = parseInt(document.getElementById("uno").value) || 0;
    var Dos = parseInt(document.getElementById("dos").value) || 0;
    var Tres = parseInt(document.getElementById("tres").value)|| 0;

    var suma = Uno + Dos + Tres ;

    document.getElementById('total').innerText = suma ;


    var diferencia = 10 - suma ;

    var mensaje = document.getElementById("mensaje");

    if (suma > 10) {
        mensaje.innerText = "No puedes superar mas de 10 stickers (-_-;)  ";
    } 
    else if (a)  {
        document.getElementById("mensaje").innerHTML = "te sobran " +  diferencia  +  "stickers";

    }

    else{
        document.getElementById
    }

}

function verificarContrasena() {

    const num1 = document.getElementById("codigo1").value;
    const num2 = document.getElementById("codigo2").value;
    const num3 = document.getElementById("codigo3").value;

    var mensaje2 = document.getElementById("mensaje2");


    if (num1 + num2 + num3 === "911") {
        mensaje2.innerText= "acceso concedido";
    } else {
        mensaje2.innerText= "acceso denegado";
    }
}

