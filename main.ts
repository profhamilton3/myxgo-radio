radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showIcon(IconNames.Fabulous)
        xgo.move_xgo(xgo.direction_enum.Forward, 100)
        basic.showArrow(ArrowNames.North)
    } else if (2 == receivedNumber) {
        basic.showArrow(ArrowNames.East)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, 15, 0.5)
        xgo.move_xgo(xgo.direction_enum.Forward, 50)
    } else if (3 == receivedNumber) {
        basic.showArrow(ArrowNames.West)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_right, 15, 1)
        xgo.move_xgo(xgo.direction_enum.Forward, 50)
    } else if (4 == receivedNumber) {
        xgo.move_xgo(xgo.direction_enum.Backward, 25)
        basic.showArrow(ArrowNames.South)
    } else if (5 == receivedNumber) {
        basic.showArrow(ArrowNames.NorthEast)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, 60, 1)
    } else if (6 == receivedNumber) {
        basic.showIcon(IconNames.Umbrella)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, 120, 2)
    } else if (7 == receivedNumber) {
        basic.showArrow(ArrowNames.SouthWest)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_right, 60, 1)
    } else if (8 == receivedNumber) {
        basic.showArrow(ArrowNames.SouthEast)
        basic.showIcon(IconNames.Cow)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_right, 120, 2)
    } else if (9 == receivedNumber) {
        basic.showNumber(3)
        xgo.execution_action(xgo.action_enum.Handshake)
    } else if (10 == receivedNumber) {
    	
    } else if (11 == receivedNumber) {
    	
    } else if (12 == receivedNumber) {
        basic.showIcon(IconNames.Butterfly)
        xgo.execution_action(xgo.action_enum.Twirl_Pitch)
    } else if (13 == receivedNumber) {
        basic.showIcon(IconNames.StickFigure)
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
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Skull)
    xgo.execution_action(xgo.action_enum.Pee)
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
    xgo.execution_action(xgo.action_enum.Handshake)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
})
radio.setGroup(3)
basic.showNumber(3)
radio.setFrequencyBand(33)
radio.setTransmitPower(7)
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
radio.sendNumber(3)
