input.onButtonPressed(Button.A, function () {
    let servovyber = 0
    if (servovyber == 1) {
        uhel += -1
    } else if (servovyber == 2) {
        uhel2 += -1
    } else if (false) {
    	
    } else {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(uhel)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    uhel += 1
})
let uhel2 = 0
let uhel = 0
uhel = 0
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, uhel)
    if (uhel < 0) {
        uhel = 0
    } else if (uhel > 180) {
        uhel = 180
    }
})
