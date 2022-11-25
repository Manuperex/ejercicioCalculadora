window.addEventListener("load", () =>{ // Escuhamos cuandose carga el documento.

    //Creamos dos constantes y guardamos los elementos que necesitamos.
    const display = document.querySelector(".calculator-display");
    const keypadButtons = document.getElementsByClassName("keypad-button");

    //Cree otra contante para convertir el HTMLCollection en un Array.
    const keypadButtonsArray = Array.from(keypadButtons);

    // Iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach( (button) =>{

        // a cada boton le aregamos un listener click
        button.addEventListener("click", () =>{
            calculadora(button, display)
        })
    })
});

function calculadora(button, display){
    switch (button.innerHTML) {
        case "C":
            borrar(display);
            break;
        case "=":
            calcular(display);
            break;
        default:
            actualizar(display, button)
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML) // tomara el string y lo va a resolver y guardarlo en el innerHTML del display
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}