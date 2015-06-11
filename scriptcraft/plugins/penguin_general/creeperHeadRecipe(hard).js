    var recipes = require('recipes');
    var items = require('items');

    var hardCreeperHeadRecipe = recipes.create({
        result: items.creeperHead(1),
        ingredients: {
            G: items.gunpowder(1),
            W: items.woolLightGreen(1),
            S: items.skeletonHead(1),
            T: items.tnt(1),
            F: items.flintAndSteel(1),
        },
        shape: ['GWG',
               'TSF',
               'GWG']
    });
    // add to server
    var addedRecipe = server.addRecipe(hardCreeperHeadRecipe);
    //    // to remove...
    //    server.removeRecipe(addedRecipe);