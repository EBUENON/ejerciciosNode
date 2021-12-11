let numero1 = 2
let numero2 = 3
let resultado = 0

input.onPinPressed (TouchPin.P1,
    function () {
        resultado = numero1 * numero2

        basic.showString("El resultado es")
        basic.showNumer(resultado)

    }
)

function alert(resultado)