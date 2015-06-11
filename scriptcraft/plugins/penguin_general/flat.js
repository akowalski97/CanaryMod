function flatReset() {
    this.down(64);
    this.up(5);
    this.chkpt('bedrock');
    this.box(blocks.grass, 16, 1, 16);
    this.move('bedrock');
    this.box(blocks.air, 16, 255, 16);
    this.move('bedrock')
}


var Drone = require('drone');
Drone.extend(flatReset);