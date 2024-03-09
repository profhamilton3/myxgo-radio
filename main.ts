radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showIcon(IconNames.Happy)
        xgo.move_xgo(xgo.direction_enum.Forward, 50)
        basic.pause(2000)
        xgo.execution_action(xgo.action_enum.Crawl_forward)
        basic.showIcon(IconNames.Asleep)
    } else if (2 == receivedNumber) {
        xgo.rotate(xgo.rotate_enum.Left, 50)
    } else if (3 == receivedNumber) {
        xgo.rotate(xgo.rotate_enum.Right, 50)
    } else if (4 == receivedNumber) {
        xgo.move_xgo(xgo.direction_enum.Backward, 50)
    } else if (5 == receivedNumber) {
    	
    } else if (6 == receivedNumber) {
    	
    } else if (7 == receivedNumber) {
    	
    } else if (8 == receivedNumber) {
    	
    } else if (9 == receivedNumber) {
    	
    } else if (10 == receivedNumber) {
    	
    } else if (11 == receivedNumber) {
    	
    } else if (12 == receivedNumber) {
    	
    } else if (13 == receivedNumber) {
    	
    } else if (14 == receivedNumber) {
    	
    } else if (15 == receivedNumber) {
    	
    } else if (0 == receivedNumber) {
    	
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    xgo.execution_action(xgo.action_enum.Sit_down)
    xgo.execution_action(xgo.action_enum.Wave)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Skull)
    xgo.execution_action(xgo.action_enum.Pee)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
    xgo.execution_action(xgo.action_enum.Handshake)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
})
radio.setGroup(3)
radio.setFrequencyBand(33)
radio.setTransmitPower(7)
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Asleep)
radio.sendNumber(1)
