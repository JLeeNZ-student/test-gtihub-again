input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Quack")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Duck!")
})
basic.showIcon(IconNames.Duck)
