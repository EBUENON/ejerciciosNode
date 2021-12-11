let valor = 0
valor = Math.randomRange(1, 100)

if (valor == >1 <50) {
    basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
}

else if (valor == >50 <80) {
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
}

else (valor == >80 <100) {
    basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
}