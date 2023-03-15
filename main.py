def on_received_number(receivedNumber):
    if 1 == receivedNumber:
        basic.show_icon(IconNames.HAPPY)
        xgo.move_xgo(xgo.direction_enum.FORWARD, 50)
        basic.pause(2000)
        xgo.execution_action(xgo.action_enum.CRAWL_FORWARD)
        basic.show_icon(IconNames.ASLEEP)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
    xgo.execution_action(xgo.action_enum.CRAWL_FORWARD)
    basic.pause(2000)
    xgo.move_xgo(xgo.direction_enum.FORWARD, 50)
    basic.pause(2000)
    xgo.execution_action(xgo.action_enum.DEFAULT_POSTURE)
    basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.A, on_button_pressed_a)

radio.set_group(3)
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.show_icon(IconNames.ASLEEP)

def on_forever():
    xgo.init_action()
basic.forever(on_forever)
