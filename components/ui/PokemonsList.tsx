import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { PokemonCard } from './'


interface Props {
    favoritesPokemons: number[]
}

export const PokemonsList: FC<Props> = ({ favoritesPokemons }) => {
    return (
        <Grid.Container gap={ 2 } direction="row" justify='flex-start'>
            {
                favoritesPokemons.map(pokemonId => (
                    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ pokemonId }>
                        <PokemonCard key={ pokemonId } pokemonId={ pokemonId } />
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}
