var inventory = require('inventory');
var items = require('items');
var utils = require('utils');

//{
//    if (typeof player == 'undefined') {
//        player = self;
//    }
//}

function changeJob(player, job) {
    if (typeof player == 'undefined') {
        player = self;
    }
    var hasRedWool = inventory(player).contains(items.woolRed(1))
    if (typeof job == 'undefined') {
        job = 0;
    }

    if (hasRedWool < 1) {
        echo(player, 'You Cannot Have That Job! You Are Not Part Of The Empire!')
    } else if (job == 0) {
        inventory(player)
            .add(items.stoneHoe(1))
            .add(items.bucket(1))
            .add(items.carrot(1))
            .add(items.potato(1))
            .add(items.melonSeeds(1))
            .add(items.pumpkinSeeds(1))
            .add(items.seeds(1));

    }
    if (job == 0) {
        echo(player, 'You Are Now A Farmer!')
    }
}

var Drone = require('drone');
Drone.extend(changeJob);