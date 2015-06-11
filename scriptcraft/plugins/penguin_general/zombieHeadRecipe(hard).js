    var recipes = require('recipes');
    var items = require('items');

    var hardZombieHeadRecipe = recipes.create({
        result: items.zombieHead(1),
        ingredients: {
            R: items.rottenFlesh(1),
            W: items.woolDarkGreen(1),
            S: items.skeletonHead(1),
            I: items.ironIngot(1),
            P: items.stoneSword(1),

        },
        shape: ['RWR',
               'ISP',
               'RWR']
    });
    // add to server
    var addedRecipe = server.addRecipe(hardZombieHeadRecipe);
    //    // to remove...
    //    server.removeRecipe(addedRecipe);