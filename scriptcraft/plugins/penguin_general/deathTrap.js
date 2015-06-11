function deathTrap() {
    this.chkpt('ground');
    this.box(blocks.obsidian, 5, 1, 5);
    this.move('ground');
    this.box0(blocks.obsidian, 5, 5, 5);
    this.move('ground');
    this.up(5);
    this.box(blocks.obsidian, 5, 1, 5);
    this.move('ground');
    this.fwd(1).right(1).up(1);
    this.box(blocks.tnt, 3, 1, 3);
    this.move('ground');
    this.fwd(1).right(1).up(2);
    this.box0(blocks.tnt, 3, 3, 3);
    this.move('ground');
    this.fwd(1).right(1).up(2);
    this.box0(blocks.glass, 3, 1, 3);
    this.move('ground');
    this.up(2);
    this.box0(blocks.glass, 5, 1, 5);
    this.move('ground');
    this.fwd(2).right(2).up(4);
    this.box(blocks.redstone, 1, 1, 1);

}
var Drone = require('drone');
Drone.extend(deathTrap);