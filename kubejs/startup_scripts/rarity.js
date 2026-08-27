ItemEvents.modification(event => {
    event.modify('quark:cloud', item => {
        item.rarity = 'UNCOMMON'
    })
})

