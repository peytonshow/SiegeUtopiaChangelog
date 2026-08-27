ServerEvents.recipes(event => {

    event.remove({ input: 'minecraft:gravel', type: 'create:splashing' })
    event.remove({ output: 'oreganized:glance' })
    event.remove({ output: 'create:brass_ingot', type: 'create:mixing' })
    event.remove({ output: 'minecraft:paper', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'minecraft:paper', type: 'minecraft:crafting_shapeless' })
    event.remove({ input: 'minecraft:sugar_cane', output: 'minecraft:sugar'})
    event.remove({ output: 'minecraft:glass_bottle', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'minecraft:gold_nugget', type: 'create:splashing' })
    event.remove({ output: 'minecraft:mushroom_stew', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:beetroot_soup', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'create:mechanical_drill' })
    event.remove({ input: Ingredient.of('#c:cobblestones'), output: Fluid.of('minecraft:lava'),})
    //////

    // Cheapen all cosmetic templates
    event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:trim_templates' }, recipe => {
        let keys = recipe.json.get('key')

        if (keys && keys.has('C') && keys.has('S')) {
            event.remove({ id: recipe.getId() })

            event.shaped(recipe.originalRecipeResult, [
                'CSC',
                'C#C',
                'CCC'
            ], {
                'C': keys.get('C'),
                'S': keys.get('S'),
                '#': '#utopia:diamonds'
            })
        }
    })

    event.smithing(
        'utopia:platinum_sword',                     // arg 1: output
        'utopia:neon_block', // arg 2: the smithing template
        'minecraft:golden_sword',                          // arg 3: the item to be upgraded
        'utopia:platinum_ingot'                            // arg 4: the upgrade item
    )
    event.smithing(
        'utopia:platinum_axe',                     // arg 1: output
        'utopia:neon_block', // arg 2: the smithing template
        'minecraft:golden_axe',                          // arg 3: the item to be upgraded
        'utopia:platinum_ingot'                            // arg 4: the upgrade item
    )
    event.smithing(
        'utopia:platinum_pickaxe',                     // arg 1: output
        'utopia:neon_block', // arg 2: the smithing template
        'minecraft:golden_pickaxe',                          // arg 3: the item to be upgraded
        'utopia:platinum_ingot'                            // arg 4: the upgrade item
    )
    event.smithing(
        'utopia:platinum_shovel',                     // arg 1: output
        'utopia:neon_block', // arg 2: the smithing template
        'minecraft:golden_shovel',                          // arg 3: the item to be upgraded
        'utopia:platinum_ingot'                            // arg 4: the upgrade item
    )
    event.smithing(
        'utopia:platinum_hoe',                     // arg 1: output
        'utopia:neon_block', // arg 2: the smithing template
        'minecraft:golden_hoe',                          // arg 3: the item to be upgraded
        'utopia:platinum_ingot'                            // arg 4: the upgrade item
    )

    event.shaped(
        Item.of('supplementaries:jar'), [
        'A  ',
        'B  ',
        '   '
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'utopia:beaker'
    })

    // Create Components

    event.shaped(
        Item.of('create:mechanical_drill'), [
        ' B ',
        'BAB',
        ' C '
    ], {
        A: 'utopia:moissanite',
        B: 'create:andesite_alloy',
        C: 'create:andesite_casing'
    })

    //////
    event.recipes.create.mixing('create:brass_ingot', [
        'utopia:uneven_raw_brass_precursor'
    ]).heated()
    event.recipes.create.splashing([CreateItem.of('create:crushed_raw_zinc', 0.9), CreateItem.of('create:crushed_raw_copper')], 'utopia:uneven_raw_brass_precursor')

    event.recipes.create.milling(CreateItem.of('create:crushed_raw_copper', 0.8), [
        'minecraft:raw_copper'], 300)
    event.recipes.create.milling(CreateItem.of('create:crushed_raw_zinc', 0.8), [
        'create:raw_zinc'], 300)
    event.recipes.create.milling(CreateItem.of('create:crushed_raw_iron', 0.8), [
        'minecraft:raw_iron'], 300)
    event.recipes.create.milling(CreateItem.of('create:crushed_raw_gold', 0.8), [
        'minecraft:raw_gold'], 300)
    event.recipes.create.milling(CreateItem.of('create:crushed_raw_silver', 0.8), [
        'oreganized:raw_silver'], 300)
    event.recipes.create.milling(CreateItem.of('create:crushed_raw_lead', 0.8), [
        'oreganized:raw_lead'], 300)
    event.recipes.create.milling(CreateItem.of('3x oreganized:refined_asbestos', 0.75), [
        'oreganized:raw_asbestos'], 300)

    // Catalyst | Gone, reduced to atoms.
    // event.recipes.create.mixing('utopia:catalyst', [
    //     Item.of('quark:moss_paste', 16),
    //     'minecraft:heart_of_the_sea']).heated()
    // event.recipes.create.mixing(Item.of('utopia:catalyst', 2), [
    //     Item.of('quark:moss_paste', 16),
    //     Item.of('quark:diamond_heart', 3),
    //     'utopia:catalyst']).heated()
    // event.recipes.create.mixing([
    //     CreateItem.of('2x create:crushed_raw_iron', 0.75),
    //     CreateItem.of('utopia:catalyst', 0.95)
    // ], [
    //     'utopia:catalyst', 'create:crushed_raw_iron'
    // ])
    // event.recipes.create.mixing([
    //     CreateItem.of('2x create:crushed_raw_zinc', 0.75),
    //     CreateItem.of('utopia:catalyst', 0.95)
    // ], [
    //     'utopia:catalyst', 'create:crushed_raw_zinc'
    // ])
    // event.recipes.create.mixing([
    //     CreateItem.of('2x create:crushed_raw_gold', 0.75),
    //     CreateItem.of('utopia:catalyst', 0.95)
    // ], [
    //     'utopia:catalyst', 'create:crushed_raw_gold'
    // ])

    // Tumbling
    event.recipes.create.mixing([
        CreateItem.of('create:crushed_raw_iron', 0.50)
    ], [
        Fluid.of('minecraft:water', 100), 'minecraft:amethyst_shard', '10x minecraft:gravel'
    ]).processingTime(1000)

    event.recipes.create.mixing([
        CreateItem.of('create:crushed_raw_gold', 0.375)
    ], [
        Fluid.of('minecraft:water', 50), 'minecraft:amethyst_shard', '5x minecraft:red_sand'
    ]).processingTime(750)

    event.recipes.create.mixing([
        CreateItem.of('minecraft:bone', 0.75)
    ], [
        Fluid.of('minecraft:water', 100), 'minecraft:amethyst_shard', '10x #minecraft:soul_fire_base_blocks'
    ]).processingTime(2000)

    event.recipes.create.mixing([
        CreateItem.of('minecraft:diamond', 0.02),
        CreateItem.of('utopia:platinum_nugget', 0.01)
    ], [
        Fluid.of('minecraft:water', 40), 'minecraft:emerald', 'minecraft:amethyst_shard', '4x minecraft:cobbled_deepslate'
    ]).processingTime(800)

    // Gunpowder
    event.recipes.create.crushing([
        '5x utopia:pure_sulfur',
        CreateItem.of('3x utopia:pure_sulfur', 0.5),
        CreateItem.of('utopia:pure_sulfur', 0.5),
    ], [
        'minecraft:potent_sulfur'
    ])
    event.recipes.create.mixing(
        CreateItem.of('3x minecraft:gunpowder'),
        [
        'utopia:pure_sulfur',
        'minecraft:coal',
        'utopia:ammonium_nitrate'
        ])
    event.recipes.create.mixing([
        CreateItem.of('3x minecraft:gunpowder')
    ], [
        '3x minecraft:sugar',
        '2x minecraft:coal'
    ]).heated()

    // Mill efficiently!
    event.recipes.create.milling([
        CreateItem.of('2x utopia:pepper'),
        CreateItem.of('2x utopia:pepper', 0.25)
        ], [
        'minecraft:blackstone'
    ])
    event.recipes.create.crushing([
        CreateItem.of('utopia:pepper, 0.75'),
        ], [
        'minecraft:blackstone'
    ])

    event.recipes.create.milling([
        CreateItem.of('3x utopia:sea_salt'),
        CreateItem.of('utopia:sea_salt', 0.75)], [
        'minecraft:calcite'
    ])
    event.recipes.create.crushing([
        CreateItem.of('utopia:sea_salt')
        ], [
        'minecraft:calcite'
    ])

    // Gravel
    event.recipes.create.crushing([
        CreateItem.of('3x minecraft:gravel')], [
        'minecraft:cobbled_deepslate'
    ])

    // Clothes Washing
    Ingredient.of('#utopia:washable').stacks.forEach(item => {
        event.recipes.create.mixing(item, [item, Fluid.of('minecraft:water', 250)]).processingTime(3000)
    })

    // Moissanite & Graphite
    event.recipes.create.compacting([
        CreateItem.of('utopia:graphite_ingot'),
    ], [
        'minecraft:coal_block'
    ]).heated().processingTime(1000)
    event.recipes.create.compacting([
        CreateItem.of('utopia:moissanite', 0.60),
    ], [
        '6x utopia:silica_dust',
        '3x utopia:graphite_ingot',
        '15x minecraft:emerald'
    ]).superheated()
    event.recipes.create.deploying('utopia:pencil', ['minecraft:stick', 'utopia:graphite_ingot'])

    // Silica
    event.recipes.create.mixing([
        CreateItem.of('7x utopia:silica_dust'),
        CreateItem.of('6x utopia:silica_dust', 0.9),
        CreateItem.of('2x minecraft:quartz', 0.4)
    ], [
        'minecraft:quartz_block',
        Fluid.of('utopia:nitric_acid', 100)
    ]).processingTime(160)
    event.recipes.create.milling([
        '3x utopia:silica_dust'
    ], [
        'minecraft:quartz'
    ])
    event.recipes.create.crushing([
        CreateItem.of('utopia:silica_dust', 0.70),
    ], [
        'minecraft:sand'
    ])
    event.recipes.create.compacting([
        CreateItem.of('minecraft:glass_bottle'),
    ], [
        'utopia:silica_dust'
    ]).heated()
    event.recipes.create.compacting([
        CreateItem.of('utopia:beaker'),
    ], [
        '1x minecraft:black_dye',
        '2x minecraft:glass_bottle'
    ]).heated()

    // Chemistry!!!
    const beakers = [
        { full: 'utopia:beaker_nitrogen', empty: 'utopia:beaker', fluid: 'utopia:nitrogen', amount: 200 },
        { full: 'utopia:beaker_oxygen', empty: 'utopia:beaker', fluid: 'utopia:oxygen', amount: 200 },
        { full: 'utopia:beaker_hydrogen', empty: 'utopia:beaker', fluid: 'utopia:hydrogen', amount: 200 },
        { full: 'utopia:beaker_ammonia', empty: 'utopia:beaker', fluid: 'utopia:ammonia', amount: 200 },
        { full: 'utopia:beaker_nitric_acid', empty: 'utopia:beaker', fluid: 'utopia:nitric_acid', amount: 200 },
        { full: 'utopia:beaker_bleach', empty: 'utopia:beaker', fluid: 'utopia:bleach', amount: 200 },
        { full: 'utopia:beaker_propylene_glycol', empty: 'utopia:beaker', fluid: 'utopia:propylene_glycol', amount: 200 }
    ];

    for (let item of beakers) {
        event.recipes.create.emptying([Fluid.of(item.fluid, item.amount), item.empty], item.full);
        event.recipes.create.filling(item.full, [Fluid.of(item.fluid, item.amount), item.empty]);
    }

    event.recipes.create.filling('supplementaries:lumisene_bottle', [Fluid.of('supplementaries:lumisene', 250), 'minecraft:glass_bottle'])

    event.recipes.create.compacting([
        'minecraft:glass_bottle',
        Fluid.of('utopia:nitrogen', 50),
    ], [
        'quark:bottled_cloud',
    ])
    event.recipes.create.mixing([
        Fluid.of('utopia:propylene_glycol', 100)
    ], [
        'minecraft:coal',
        Fluid.of('utopia:hydrogen', 120),
        Fluid.of('utopia:oxygen', 40)
    ]).superheated()
    event.recipes.create.mixing([
        Fluid.of('utopia:oxygen', 80),
        Fluid.of('utopia:hydrogen', 120)
    ], [
        Fluid.of('minecraft:water', 200),
        Ingredient.of('#utopia:electricity')
    ]).heated()
    event.recipes.create.mixing([
        'utopia:ammonium_nitrate'
    ], [
        Fluid.of('utopia:ammonia', 500),
        Fluid.of('utopia:nitric_acid', 500)
    ]).heated()

    event.recipes.create.mixing([
        Fluid.of('utopia:nitric_acid', 200)
    ], [
        Fluid.of('utopia:nitrogen', 200),
        Fluid.of('minecraft:water', 500)
    ])
    event.recipes.create.compacting([
        CreateItem.of('utopia:neon_block', 0.25),
        '16x minecraft:glass_bottle'
    ], [
        'oreganized:electrum_nugget',
        '16x quark:bottled_cloud',
        Fluid.of('utopia:propylene_glycol', 500)
    ]).processingTime(6000)
    event.recipes.create.mixing([
        Fluid.of('utopia:bleach', 200)
    ], [
        'utopia:sea_salt',
        Fluid.of('minecraft:water', 200),
        Ingredient.of('#utopia:electricity')
    ]).heated().processingTime(140)
    event.recipes.create.mixing([
        Fluid.of('utopia:ammonia', 400)
    ], [
        Fluid.of('utopia:nitrogen', 200),
        Fluid.of('utopia:hydrogen', 200)
    ]).heated()
    event.recipes.create.mixing([
        Fluid.of('utopia:ammonia', 400),
        '9x utopia:platinum_nugget'
    ], [
        Fluid.of('utopia:nitric_acid', 200),
        Fluid.of('utopia:oxygen', 200),
        'utopia:platinum_ingot'
    ]).heated().processingTime(600)
    event.recipes.create.compacting([
        '1x quark:bottled_cloud',
        'minecraft:heart_of_the_sea'
    ], [
        'minecraft:glass_bottle',
        'minecraft:heart_of_the_sea'
    ]).heated()
    event.recipes.create.compacting([
        Fluid.of('minecraft:water', 200),
        'minecraft:blue_ice',
        'minecraft:heart_of_the_sea'
    ], [
        'minecraft:blue_ice',
        'minecraft:heart_of_the_sea'
    ]).heated()
    event.recipes.create.mixing([
        'minecraft:magma_block',
    ], [
       Ingredient.of('#c:cobblestones')
    ]).superheated().processingTime(30)

    event.recipes.create.compacting([
        Fluid.of('minecraft:lava', 50),
    ], [
        'minecraft:magma_block',
    ])

    // Exp Farm
    event.recipes.create.compacting([
        CreateItem.of('create:experience_nugget', 0.25),
        CreateItem.of('create:experience_nugget', 0.25),
        '4x minecraft:stone_bricks'
    ], [
        '4x minecraft:infested_stone'
    ])

    // Gold + Platinum
    event.recipes.create.splashing([
        '9x minecraft:gold_nugget',
        CreateItem.of('minecraft:quartz', 0.5),
        CreateItem.of('utopia:platinum_nugget', 0.02)
    ], [
        'create:crushed_raw_gold'
    ])
    event.recipes.create.splashing([
        CreateItem.of('9x oreganized:silver_nugget'),
        CreateItem.of('utopia:platinum_nugget', 0.1)
    ], [
        'create:crushed_raw_silver'
    ])

    event.recipes.create.mechanical_crafting('minecraft:warden_spawn_egg', [
        'IEJEI',
        'EEXEE',
        'JXSXJ',
        'EEXEE',
        'IEJEI'
    ], {
        E: 'minecraft:echo_shard',
        J: 'quark:diamond_heart',
        I: 'utopia:neon_block',
        X: 'minecraft:sculk_catalyst',
        S: 'minecraft:sculk_shrieker'
    })

    // Remove crushing for milled-only items
    event.remove({ output: 'utopia:sea_salt', type: 'create:crush' })
    event.remove({ output: 'utopia:pepper', type: 'create:crush' })
})
