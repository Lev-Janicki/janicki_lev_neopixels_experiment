light.setBrightness(5)
forever(function on_forever() {
    let i: number;
    for (i = 0; i < 5; i++) {
        light.setAll(light.rgb(255, 0, 255))
        pause(1000)
        light.clear()
        pause(1000)
    }
    
    for (i = 0; i < 5; i++) {
        light.setPixelColor(0, light.rgb(255, 0, 0))
        light.setPixelColor(1, light.rgb(0, 0, 255))
        light.setPixelColor(2, light.rgb(0, 255, 0))
        light.setPixelColor(3, light.rgb(255, 255, 0))
        light.setPixelColor(4, light.rgb(255, 0, 255))
        light.setPixelColor(5, light.rgb(0, 255, 255))
        light.setPixelColor(6, light.rgb(255, 255, 255))
        light.setPixelColor(7, light.rgb(128, 0, 255))
        light.setPixelColor(8, light.rgb(0, 255, 128))
        light.setPixelColor(9, light.rgb(255, 128, 0))
        pause(1000)
        light.clear()
        pause(1000)
    }
    
})
