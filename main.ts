input.onButtonPressed(Button.A, function () {
    if (contador == 5) {
        bloqueo = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (control.millis() - tiempo < 1300) {
        contador += 1
    } else {
        while (true) {
            basic.showIcon(IconNames.Sad)
            basic.pause(100)
        }
    }
})
let bloqueo = 0
let tiempo = 0
let contador = 0
basic.showString("CLAVE")
contador = 0
tiempo = control.millis()
basic.forever(function () {
    if (bloqueo == 0) {
        basic.showString("UWU")
        if (control.millis() - tiempo > 1300) {
            basic.showIcon(IconNames.Sad)
            while (true) {
                basic.pause(100)
            }
        }
    }
})
