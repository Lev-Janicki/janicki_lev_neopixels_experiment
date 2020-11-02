light.set_brightness(5)


def on_forever():
    for i in range(5):
        light.set_all(light.rgb(255, 0, 255))
        pause(1000)
        light.clear()
        pause(1000)
    pass
    for i in range(5):
        light.set_pixel_color(0, light.rgb(255,0,0))
        light.set_pixel_color(1, light.rgb(0,0,255))
        light.set_pixel_color(2, light.rgb(0,255,0))
        light.set_pixel_color(3, light.rgb(255,255,0))
        light.set_pixel_color(4, light.rgb(255,0,255))
        light.set_pixel_color(5, light.rgb(0,255,255))
        light.set_pixel_color(6, light.rgb(255,255,255))
        light.set_pixel_color(7, light.rgb(128,0,255))
        light.set_pixel_color(8, light.rgb(0,255,128))
        light.set_pixel_color(9, light.rgb(255,128,0))
        pause(1000)
        light.clear()
        pause(1000)
    pass
forever(on_forever)
