function bombDrop() {
    this.chkpt('ground');
    this.up(50);
    this.chkpt('sky');
    this.down(1);
    this.box(blocks.tnt, 1, 1, 1);
    this.move('sky');
    this.left(1);
    this.box(blocks.tnt, 1, 1, 1);
    this.move('sky');
    this.fwd(1);
    this.box(blocks.tnt, 1, 1, 1);
    this.move('sky');
    this.back(1);
    this.box(blocks.tnt, 1, 1, 1);
    this.move('sky');
    this.right(1);
    this.box(blocks.tnt, 1, 1, 1);
    this.move('sky');
    this.box(blocks.redstone, 1, 1, 1);
    this.move('ground');
    this.move('sky');
    this.move('ground');
    this.move('sky');
    this.move('ground');
    this.move('sky');
    this.move('ground');
    this.move('sky');
    this.move('ground');
    this.move('sky');
    this.box(blocks.air, 1, 1, 1);
    this.move('ground')
}
var Drone = require('drone');
Drone.extend(bombDrop);