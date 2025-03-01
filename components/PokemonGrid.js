import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemons, search }) => {
	const filteredPokemons = pokemons.filter((p) => p.name.includes(search));

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
			{filteredPokemons.length === 0 ? (
				<div className="col-span-4 text-center text-gray-600 text-lg font-semibold">
					{"No Results Found 😢"}
				</div>
			) : (
				filteredPokemons.map((pokemon, index) => (
					<PokemonCard key={index} pokemon={pokemon} />
				))
			)}
		</div>
	);
};

export default PokemonGrid;
