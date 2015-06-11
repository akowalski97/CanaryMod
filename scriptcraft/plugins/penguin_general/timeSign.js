var utils = require('utils'),
    signs = require('signs');

var onTimeChoice = function (event) {
    var selectedIndex = event.number;
    // convert to Minecraft time 0 = Dawn, 6000 = midday, 12000 = dusk, 18000 = midnight
    var time = selectedIndex * 6000;
    event.player.location.world.setTime(time);
};

// signs.menu returns a function which can be called for one or more signs in the game.
var convertToTimeMenu = signs.menu('Time of Day', ['Dawn', 'Midday', 'Dusk', 'Midnight'],
    onTimeChoice);

exports.time_sign = function (player) {
    var sign = signs.getTargetedBy(player);
    if (!sign) {
        throw new Error('You must look at a sign');
    }
    convertToTimeMenu(sign);
};