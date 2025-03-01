import Image from "next/image";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
	const pokeId = pokemon.url.split("/")[6];

	return (
		<Link href={`/pokemon/${pokeId}`}>
			<div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
					alt={pokemon.name}
					width={128}
					height={128}
					className="mx-auto"
				/>
				<h2 className="text-lg font-semibold capitalize mt-3 text-gray-800">
					{pokemon.name}
				</h2>
			</div>
		</Link>
	);
};

export default PokemonCard;
