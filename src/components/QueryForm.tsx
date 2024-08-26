import { useState } from 'react';

export function QueryForm({
  setFirst,
  first
}: {
  setFirst: React.Dispatch<React.SetStateAction<number>>;
  first: number;
}) {
  const [queryFirst, setQueryFirst] = useState<number>(first);

  return (
    <div>
      <label htmlFor="queryFirst">Amount of pokemons: </label>
      <input
        id="queryFirst"
        type="number"
        value={queryFirst}
        onChange={e =>
          setQueryFirst(e.target.value ? parseInt(e.target.value) : 0)
        }
      />
      <button type="submit" onClick={() => setFirst(queryFirst)}>
        Search
      </button>
    </div>
  );
}
