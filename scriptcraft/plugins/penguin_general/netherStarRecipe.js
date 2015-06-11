    var recipes = require('recipes');
    var items = require('items');

    var netherStarRecipe = recipes.create({
        result: items.netherStar(1),
        ingredients: {
            B: items.blazeRod(1),
            E: items.eyeofEnder(1),
            W: items.witherSkeletonHead(1)
        },
        shape: ['BWB',
               'WEW',
               'BWB']
    });
    // add to server
    var addedRecipe = server.addRecipe(netherStarRecipe);
    //    // to remove...
    //    server.removeRecipe(addedRecipe);