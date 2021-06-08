let distance = 0
pins.digitalWritePin(DigitalPin.P6, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
led.enable(false)
let affichage = TM1637.create(
DigitalPin.P15,
DigitalPin.P1,
7,
4
)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    affichage.showNumber(distance)
    if (distance < 5) {
        pins.digitalWritePin(DigitalPin.P6, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P6, 1)
    }
    basic.pause(1000)
})
