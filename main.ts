controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    color()
})
function color () {
    scene.setBackgroundColor(randint(0, 16))
}
function spawn (mySprite: Sprite) {
    mySprite = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(randint(0, 100), randint(0, 100))
    mySprite.setVelocity(0, 100)
}
sprites.onCreated(SpriteKind.Player, function (sprite) {
    music.baDing.play()
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
game.setDialogFrame(img`
    ..66666666666666666666..
    .6699999999999999999966.
    669991111111111111199966
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    669991111111111111199966
    .6699999999999999999966.
    ..66666666666666666666..
    `)
game.showLongText("its raining ducks and you have the power to change the colors", DialogLayout.Center)
forever(function () {
    spawn(mySprite)
    pause(1000)
})
