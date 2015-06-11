exports.spawnSH = function (player) {
    box(blocks.cobblestone, 9, 1, 9)
        .move('start')
        .box0(blocks.cobblestone, 9, 6, 9)
        .move('start')
        .up(6)
        .prism(blocks.oak, 9, 9)
        .move('start')
        .right(4)
        .up(1)
        .door();
}