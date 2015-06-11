    var recipes = require('recipes');
    var items = require('items');

    var hardSkeletonSkullRecipe = recipes.create({
        result: items.skeletonHead(1),
        ingredients: {
            B: items.bone(1),
            W: items.woolWhite(1),
            M: items.witherSkeletonHead(1),
            S: items.bow(1),
            A: items.arrow(1),
        },
        shape: ['BWB',
               'SMA',
               'BWB']
    });
    // add to server
    var addedRecipe = server.addRecipe(hardSkeletonSkullRecipe);
    //    // to remove...
    //    server.removeRecipe(addedRecipe);