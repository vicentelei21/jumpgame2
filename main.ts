namespace SpriteKind {
    export const Platform = SpriteKind.create()
    export const Wall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platform, function (sprite, otherSprite) {
    Human.vy = -100
})
sprites.onOverlap(SpriteKind.Platform, SpriteKind.Wall, function (sprite, otherSprite) {
    sprite.vx = -1 * sprite.vx
})
let Human: Sprite = null
Human = sprites.create(assets.image`myImage`, SpriteKind.Player)
let Jumppad = sprites.create(assets.image`myImage0`, SpriteKind.Platform)
let Wall1 = sprites.create(assets.image`myImage1`, SpriteKind.Wall)
let Wall2 = sprites.create(assets.image`myImage2`, SpriteKind.Wall)
Wall1.bottom = scene.screenHeight()
Wall2.bottom = scene.screenHeight()
Wall1.left = -1
Wall2.right = scene.screenWidth() + 1
Jumppad.bottom = scene.screenHeight()
Jumppad.sx = 2.5
Human.ay = 100
Jumppad.vx = 100
game.onUpdate(function () {
    Human.vx += controller.dx()
})
