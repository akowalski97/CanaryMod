 function spleefArena(radius) {
     this.up(50);
     this.chkpt('arena');
     this.cylinder(blocks.tnt, radius, 1);
     this.move('arena').up(1);
     this.cylinder(blocks.sand, radius, 1);
     this.move('arena').up(2);
     this.cylinder(blocks.pressure_plate_stone, radius, 1);
     //     this.move('arena').up(1).left(1).back(1);
     //     this.cylinder0(blocks.quartz, radius + 1, 1);
     createRing(this, radius, 1, blocks.quartz);
     createRing(this, radius, 2, blocks.quartz);
     createRing(this, radius, 3, blocks.glowstone);
     createRing(this, radius, 4, blocks.quartz);
     createRing(this, radius, 5, blocks.quartz, 3);
     createRing(this, radius, 6, blocks.quartz, 4);
     createRing(this, radius, 7, blocks.quartz);
     createRing(this, radius, 7, blocks.glowstone, 1, 2);
     createRing(this, radius, 7, blocks.glass, 3, 3);
     createRing(this, radius, 8, blocks.quartz, 6);
     createRing(this, radius, 9, blocks.quartz, 7);
     //
     //     this.move('arena').up(1).left(2).back(2);
     //     this.cylinder0(blocks.quartz, radius + 2, 1);
     //     this.move('arena').up(1).left(3).back(3);
     //     this.cylinder0(blocks.glowstone, radius + 3, 1);
     //     this.move('arena').up(1).left(4).back(4);
     //     this.cylinder0(blocks.quartz, radius + 4, 1);
     //     this.move('arena').up(1).left(5).back(5);
     //     this.cylinder0(blocks.quartz, radius + 5, 3);
     //     this.move('arena').up(1).left(6).back(6);
     //     this.cylinder0(blocks.quartz, radius + 6, 4);
     //     this.move('arena').up(1).left(7).back(7);
     //     this.cylinder0(blocks.quartz, radius + 7, 1);
     //     this.move('arena').up(2).left(7).back(7);
     //     this.cylinder0(blocks.glowstone, radius + 7, 1);
     //     this.move('arena').up(3).left(7).back(7);
     //     this.cylinder0(blocks.glass, radius + 7, 3);
     //     this.move('arena').up(1).left(8).back(7);
     //     this.cylinder0(blocks.quartz, radius + 8, 6);
     //     this.move('arena').up(1).left(9).back(8);
     //     this.cylinder0(blocks.quartz, radius + 9, 7);
     this.move('arena').up(1);
 }

 function createRing(d, radius, moveSize, blockType, height, moveUp) {
     if (typeof height == 'undefined') {
         height = 1;
     }
     if (typeof moveUp == 'undefined') {
         moveUp = 1;
     }
     d.move('arena').up(moveUp).left(moveSize).back(moveSize);
     d.cylinder0(blockType, radius + moveSize, height);


 }

 var Drone = require('drone');
 Drone.extend(spleefArena);