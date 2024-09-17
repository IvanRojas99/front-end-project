export const statisticsReducer = (team) => {
    const stats = team.map((pokemon) => {
        return {
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            "special-attack": pokemon.stats[3].base_stat,
            "special-defense": pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
        }
    });
    const tableStats = stats.reduce((acc, pokemon) => {
        return {
            hp: acc.hp + pokemon.hp,
            attack: acc.attack + pokemon.attack,
            defense: acc.defense + pokemon.defense,
            "special-attack": acc["special-attack"] + pokemon["special-attack"],
            "special-defense": acc["special-defense"] + pokemon["special-defense"],
            speed: acc.speed + pokemon.speed,
        }
    }, {
        hp: 0,
        attack: 0,
        defense: 0,
        "special-attack": 0,
        "special-defense": 0,
        speed: 0,
    })

    return tableStats;
}