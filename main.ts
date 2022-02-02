input.onButtonPressed(Button.A, function () {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(311, music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.forever(function () {
	
})
