kaboom({
    global: true,
    fullscreen: true,
    scale: 1.5,
    debug: true,
    clearColor: [0,0,0,1]
})

loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'M6rwarW.png')
loadSprite('mario', 'Wb1qfhK.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('surprise', 'gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left', 'ReTPiWY.png')
loadSprite('pipe-top-right', 'hj2GK4n.png')
loadSprite('pipe-bottom-left', 'c1cYSbt.png')
loadSprite('pipe-bottom-right', 'nqQ79eI.png')

loadSprite('blue-block', 'fVscIbn.png')
loadSprite('blue-brick', '3e5YRQd.png')
loadSprite('blue-steel', 'gqVoI2b.png')
loadSprite('blue-evil-shroom', 'SvV4ueD.png')
loadSprite('blue-surprise', 'RMqCc1G.png')

scene("game", () => {
    layers(['bg','obj','ui]'],'obj')

    const map = [
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '     %   =*=%=                        ',
        '                                      ',
        '                            -+        ',
        '                    ^   ^   ()        ',
        '==============================   =====',
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block',area(), solid())],
        '$': [sprite('coin')],
        '%': [sprite('surprise'), solid(),area(),  'coin-surprise'],
        '*': [sprite('surprise'), solid(),area(), 'mushroom-surprise'],
        '}': [sprite('unboxed'), solid(),area()],
        '(': [sprite('pipe-bottom-left'), solid(),area(), scale(0.5)],
        ')': [sprite('pipe-bottom-right'), solid(), area(), scale(0.5)],
        '-': [sprite('pipe-top-left'), solid(), area(), scale(0.5)],
        '+': [sprite('pipe-top-right'), solid(),area(),  scale(0.5)],
        '^': [sprite('evil-shroom'), solid(),area()],
        '#': [sprite('mushroom'), solid(),area()],

    }

    const gameLevel = addLevel(map, levelCfg)

    const player = add([
        sprite('mario'), solid(),
        pos(30,0),
        body(),
        area(),
        origin('bot')
    ])
})

start("game")