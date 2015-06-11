    var recipes = require('recipes');
    var items = require('items');

    var skeletonSkullRecipe = recipes.create({
        result: items.skeletonHead(1),
        ingredients: {
            B: items.bone(1),
            W: items.woolWhite(1),
            M: items.bonemeal(1)
        },
        shape: ['BWB',
               'WMW',
               'BWB']
    });
    // add to server
    var addedRecipe = server.addRecipe(skeletonSkullRecipe);
    //    // to remove...
    //    server.removeRecipe(addedRecipe);