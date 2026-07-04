ItemEvents.modification( event => {
    event.modify('utopia:beaker_oxygen', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('utopia:beaker_hydrogen', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('utopia:beaker_nitrogen', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('utopia:beaker_ammonia', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('utopia:beaker_nitric_acid', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('utopia:beaker_bleach', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('utopia:beaker_propylene_glycol', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('utopia:ammonium_nitrate', item =>{ item.setCraftingRemainder('utopia:beaker') })
    event.modify('quark:bottled_cloud', item =>{ item.setCraftingRemainder('minecraft:glass_bottle') })

})