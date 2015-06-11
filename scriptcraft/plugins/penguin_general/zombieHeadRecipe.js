    var recipes = require('recipes');
    var items = require('items');

    var zombieHeadRecipe = recipes.create({
        result: items.zombieHead(1),
        ingredients: {
            R: items.rottenFlesh(1),
            W: items.woolDarkGreen(1),
            S: items.skeletonHead(1)
        },
        shape: ['RWR',
               'WSW',
               'RWR']
    });
    // add to server
    var addedRecipe = server.addRecipe(zombieHeadRecipe);
    //    // to remove...
    //    server.removeRecipe(addedRecipe);