var inventory = require('inventory');
var items = require('items');
var utils = require('utils');

function joinTeam(player, color) {
    if (typeof player == 'undefined') {
        player = self;
    }

    if (typeof color == 'undefined') {
        color = 0;
    }

    inventory(player)
        .remove(items.leatherHelmet(1))
        .remove(items.leatherBoots(1))
        .remove(items.leatherChestplate(1))
        .remove(items.leatherLeggings(1))
        .remove(items.roseRed(4))
        .remove(items.ironChestplate(1))
        .remove(items.cactusGreen(1))
        .remove(items.chainmailChestplate(1))
        .remove(items.chainmailLeggings(1))
        .remove(items.stoneSword(1))
        .remove(items.stoneSpade(1))
        .remove(items.stonePickaxe(1))
        .remove(items.chainmailBoots(1))
        .remove(items.lapisLazuli(4))
        .remove(items.stoneHoe(1))
        .remove(items.dandelionYellow(4))
        .remove(items.stoneAxe(1))
        .remove(items.inkSack(1))
        .remove(items.glassBottle(16))
        .remove(items.brewingStand(1))
        .remove(items.netherWart(1))
        .remove(items.carrot(1))
        .remove(items.goldBlock(1))
        .remove(items.spiderEye(32))
        .remove(items.stoneHoe(1))
        .remove(items.stoneSword(1))
        .remove(items.bonemeal(1))
        .remove(items.stoneSword(1))
        .remove(items.diamondChestplate(1))
        .remove(items.diamondLeggings(1))
        .remove(items.diamondBoots(1))
        .remove(items.goldHelmet(1))
        .remove(items.goldSword(1))
        .remove(items.diamondSword(1))
        .remove(items.limeDye(1))
        .remove(items.ironChestplate(1))
        .remove(items.purpleDye(1))
        .remove(items.ironLeggings(1))
        .remove(items.ironBoots(1))
        .add(items.leatherHelmet(1))

    if (color == 1) {
        inventory(player)
            .add(items.roseRed(4))
            .add(items.woolRed(1));


    } else if (color == 10) {
        inventory(player)
            .add(items.cactusGreen(1))
            .add(items.chainmailChestplate(1))
            .add(items.chainmailLeggings(1))
            .add(items.stoneSword(1))
            .add(items.stoneSpade(1))
            .add(items.stonePickaxe(1))
            .add(items.chainmailBoots(1));

    } else if (color == 100) {
        inventory(player)
            .add(items.lapisLazuli(4))
            .add(items.leatherChestplate(1))
            .add(items.leatherLeggings(1))
            .add(items.leatherBoots(1))
            .add(items.stoneSword(1))
            .add(items.stoneHoe(1));

    } else if (color == 1000) {
        inventory(player)
            .add(items.dandelionYellow(4))
            .add(items.leatherChestplate(1))
            .add(items.leatherLeggings(1))
            .add(items.leatherBoots(1))
            .add(items.stoneAxe(1));

    } else if (color == -1) {
        inventory(player)
            .add(items.inkSack(1))
            .add(items.glassBottle(16))
            .add(items.brewingStand(1))
            .add(items.netherWart(1))
            .add(items.carrot(1))
            .add(items.goldBlock(1))
            .add(items.spiderEye(32))
            .add(items.stoneHoe(1))
            .add(items.stoneSword(1));

    } else if (color == 2) {
        inventory(player)
            .add(items.bonemeal(1))
            .add(items.stoneSword(1))
            .add(items.diamondChestplate(1))
            .add(items.diamondLeggings(1))
            .add(items.diamondBoots(1));

    } else if (color == 3) {
        inventory(player)
            .add(items.goldHelmet(1))
            .add(items.goldSword(1));

    } else if (color == 4) {
        inventory(player)
            .add(items.goldHelmet(1))
            .add(items.goldSword(1));

    } else if (color == 11) {
        inventory(player)
            .add(items.ironChestplate(1))
            .add(items.diamondSword(1))
            .add(items.limeDye(1));

    } else if (color == 12) {
        inventory(player)
            .add(items.ironChestplate(1))
            .add(items.ironSword(1))
            .add(items.purpleDye(1));

    } else if (color == 13) {
        inventory(player)
            .add(items.ironLeggings(1))
            .add(items.ironBoots(1))
            .add(items.diamondChestplate(1))
            .add(items.ironSword(1))
            .add(items.purpleDye(1));

    }
    if (color == 0) {
        echo(player.name + ' Is Factionless!')

    } else if (color == 1) {
        echo(player.name + ' Joined The Empire!')

    } else if (color == 2) {
        echo(player.name + ' Is Now a Royal Guard of the Empire!')

    } else if (color == 3) {
        echo(player.name + ' Is Now The Emperor!  All Hail' + player.name)

    } else if (color == 4) {
        echo(player.name + ' Is Now The Empress!  All Hail' + player.name)

    } else if (color == 10) {
        echo(player.name + ' Joined The Hive!')

    } else if (color == 11) {
        echo(player.name + ' Is Now a Broodguardian!')

    } else if (color == 12) {
        echo(player.name + ' Is Now The Broodlord!')

    } else if (color == 13) {
        echo(player.name + ' Is Now The BroodQueen!')

    } else if (color == 100) {
        echo(player.name + ' Joined The Guardians!')

    } else if (color == 1000) {
        echo(player.name + ' Joined The Tribe!')
    }
}

var Drone = require('drone');
Drone.extend(joinTeam);