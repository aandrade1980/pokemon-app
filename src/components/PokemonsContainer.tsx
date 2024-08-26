import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from './Pokemon';
import { QueryForm } from './QueryForm';
import type { Pokemon as PokemonType } from '../types/pokemon';

export function PokemonsContainer() {
  const [first, setFirst] = useState(3);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons: PokemonType[] = data?.pokemons || [];

  return (
    <>
      <QueryForm setFirst={setFirst} first={first} />
      <div className="container">
        {pokemons &&
          pokemons.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  );
}
