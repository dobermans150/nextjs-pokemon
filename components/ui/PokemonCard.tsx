import { FC } from 'react'
import { Card } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
    pokemonId: number
}

export const PokemonCard: FC<Props> = ({ pokemonId }) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Card
            hoverable
            clickable
            css={ { padding: '10px' } }
            onClick={ onFavoriteClicked }
        >
            <Card.Image
                src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg` }
                width="100%"
                height={ 140 }
            />
        </Card>
    )
}
