function flood(radius, height) {
    this.chkpt('ground');
    this.up(1);
    this.cylinder(blocks.water, radius, height);
    this.chkpt('ground');

}

function flood(radius, height) {
    if (typeof height == 'undefined') {
        height = 2;
    }
    if (typeof radius == 'undefined') {
        moveUp = 15;
    }
}
var Drone = require('drone');
Drone.extend(flood);