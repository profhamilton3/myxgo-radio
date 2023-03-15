radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showIcon(IconNames.Happy)
        xgo.move_xgo(xgo.direction_enum.Forward, 50)
        basic.pause(2000)
        xgo.execution_action(xgo.action_enum.Crawl_forward)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    xgo.execution_action(xgo.action_enum.Go_prone)
    basic.pause(2000)
    xgo.execution_action(xgo.action_enum.Default_posture)
    basic.showIcon(IconNames.Asleep)
})
radio.setGroup(3)
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Asleep)
