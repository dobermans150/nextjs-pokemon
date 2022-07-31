import { Button } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokémons'>
      <ul>
        {
          pokemons?.map(({ id, name }) => (
            <li key={ id }>
              <ul>{ `${id} - ${name}` }</ul>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => (
    {
      name: pokemon.name,
      url: pokemon.url,
      id: `${index + 1}`,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }
  ))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage


