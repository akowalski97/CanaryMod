    var recipes = require('recipes');
    var items = require('items');

    var creeperHeadRecipe = recipes.create({
        result: items.creeperHead(1),
        ingredients: {
            G: items.gunpowder(1),
            W: items.woolLightGreen(1),
            S: items.skeletonHead(1)
        },
        shape: ['GWG',
               'WSW',
               'GWG']
    });
    // add to server
    var addedRecipe = server.addRecipe(creeperHeadRecipe);
    //    // to remove...
    //    server.removeRecipe(addedRecipe);