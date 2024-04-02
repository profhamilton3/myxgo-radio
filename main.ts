radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showIcon(IconNames.Fabulous)
        xgo.move_xgo(xgo.direction_enum.Forward, 100)
        basic.showArrow(ArrowNames.North)
    } else if (2 == receivedNumber) {
        xgo.rotate(xgo.rotate_enum.Left, 65)
        basic.showArrow(ArrowNames.West)
    } else if (3 == receivedNumber) {
        xgo.rotate(xgo.rotate_enum.Right, 50)
        basic.showArrow(ArrowNames.East)
    } else if (4 == receivedNumber) {
        xgo.move_xgo(xgo.direction_enum.Backward, 75)
        basic.showArrow(ArrowNames.South)
    } else if (5 == receivedNumber) {
        xgo.move_xgo(xgo.direction_enum.Left, 50)
        basic.showArrow(ArrowNames.NorthWest)
    } else if (6 == receivedNumber) {
        xgo.move_xgo(xgo.direction_enum.Forward, 65)
        basic.showArrow(ArrowNames.NorthEast)
    } else if (7 == receivedNumber) {
        xgo.move_xgo(xgo.direction_enum.Right, 50)
        basic.showArrow(ArrowNames.SouthWest)
    } else if (8 == receivedNumber) {
        xgo.move_xgo(xgo.direction_enum.Backward, 20)
        basic.showArrow(ArrowNames.SouthEast)
    } else if (9 == receivedNumber) {
        basic.showNumber(5)
        xgo.execution_action(xgo.action_enum.Handshake)
    } else if (10 == receivedNumber) {
    	
    } else if (11 == receivedNumber) {
    	
    } else if (12 == receivedNumber) {
        xgo.execution_action(xgo.action_enum.Twirl_Pitch)
    } else if (13 == receivedNumber) {
        xgo.execution_action(xgo.action_enum.Twirl_Yaw)
    } else if (14 == receivedNumber) {
    	
    } else if (15 == receivedNumber) {
    	
    } else if (0 == receivedNumber) {
        basic.showNumber(0)
        xgo.execution_action(xgo.action_enum.Sit_down)
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
    xgo.move_xgo(xgo.direction_enum.Left, 25)
    basic.pause(2000)
    xgo.execution_action(xgo.action_enum.Default_posture)
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
    xgo.execution_action(xgo.action_enum.Handshake)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
})
radio.setGroup(5)
basic.showNumber(5)
radio.setFrequencyBand(33)
radio.setTransmitPower(7)
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
radio.sendNumber(5)
