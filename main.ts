input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    P1 += 1
    Rounds += 1
    updateScoreBoard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    Ties += 1
    Rounds += 1
    updateScoreBoard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    P2 += 1
    Rounds += 1
    updateScoreBoard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    Rounds = 0
    P1 = 0
    P2 = 0
    Ties = 0
    OLED.writeStringNewLine("shall we play a game?")
    basic.pause(2000)
    updateScoreBoard()
}
function updateScoreBoard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 Score:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 Score:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
let P2 = 0
let Ties = 0
let Rounds = 0
let P1 = 0
reset()
