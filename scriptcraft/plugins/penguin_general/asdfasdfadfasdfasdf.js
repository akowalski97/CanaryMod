//var inventory = require('inventory');
//var items = require('items');
//var utils = require('utils');
//
//// gives every player a cookie and a baked potatoe
//utils.players(function (player) {
//    inventory(player)
//        .add(items.cookie(1))
//        .add(items.bakedPotato(1))
//});
//
//// give a player 6 cookies then take away 4 of them
//
//inventory(player)
//    .add(items.cookie(6))
//    .remove(items.cookie(4))
//
//// check if a player has any cookies
//
//var hasCookies = inventory(player).contains(items.cookie(1));