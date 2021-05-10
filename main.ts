input.onButtonPressed(Button.A, function () {
    input2 += Achange
})
input.onButtonPressed(Button.B, function () {
    input2 += Bchange
    basic.showNumber(input2)
})
input.onGesture(Gesture.Shake, function () {
    Calculate()
})
function Calculate () {
    Multiplier = 1
    Light = 24
    basic.clearScreen()
    while (input2 >= Multiplier) {
        Multiplier = Multiplier * 2
        Light += -1
    }
    Multiplier = Multiplier / 2
    Light += 1
    while (input2) {
        if (input2 >= Multiplier) {
            led.plot(Light % 5, Light % 5)
            input2 = input2 - Multiplier
        }
    }
    Multiplier = Multiplier / 2
    Light += 1
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Achange = Achange * -1
    Bchange = Bchange * -1
})
let Light = 0
let Multiplier = 0
let Bchange = 0
let Achange = 0
let input2 = 0
input2 = 0
Achange = 1
Bchange = 10
basic.forever(function () {
	
})
