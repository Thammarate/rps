OLED.init(128, 64)
let Rounds = 0
let P1 = 0
let P2 = 0
let Ties = 0
OLED.writeStringNewLine("shall we play a game?")
basic.pause(2000)
OLED.clear()
OLED.writeStringNewLine("Player 1 Score:" + P1)
OLED.newLine()
OLED.writeStringNewLine("Player 2 Score:" + P2)
OLED.newLine()
OLED.writeStringNewLine("Ties:" + Ties)
OLED.newLine()
OLED.writeStringNewLine("Rounds:" + Rounds)
basic.forever(function () {
	
})
