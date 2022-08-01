import { useEffect, useState } from 'react'

import { Layout } from '../../components/layouts'
import { NoFavorites, PokemonsList } from '../../components/ui'
import { localFavorites } from '../../utils'

const Favorites = () => {


    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritesPokemons(localFavorites.pokemons());
    }, []);


    return (
        <Layout title='Pokémons - Favoritos'>
            {
                favoritesPokemons.length === 0
                    ? (<NoFavorites />)
                    : (<PokemonsList favoritesPokemons={ favoritesPokemons } />)
            }
        </Layout>
    )
}


export default Favorites