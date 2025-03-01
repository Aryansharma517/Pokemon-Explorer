import { useState, useEffect } from "react";
import "@/styles/globals.css";
import PokemonGrid from "@/components/PokemonGrid";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";

export default function Home() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const [nextUrl, setNextUrl] = useState("");
	const [prevUrl, setPrevUrl] = useState("");
	const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=12";

	useEffect(() => {
		fetchPokemons(API_URL);
	}, []);

	const fetchPokemons = async (url) => {
		setLoading(true);
		const res = await fetch(url);
		const data = await res.json();
		setPokemons(data.results);
		setNextUrl(data.next);
		setPrevUrl(data.previous);
		setLoading(false);
	};

	return (
		<div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
			<div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-6">
				<h1 className="text-4xl font-extrabold text-center my-6 text-blue-700 drop-shadow-md">
					Pokémon Explorer
				</h1>

				{/* Search Bar */}
				<SearchBar setSearch={setSearch} />

				{/* Pokemon Grid */}
				{loading ? (
					<Loader />
				) : (
					<PokemonGrid pokemons={pokemons} search={search} />
				)}

				{/* Pagination */}
				{search?.length === 0 ? (
					<Pagination prevUrl={prevUrl} nextUrl={nextUrl} fetchPokemons={fetchPokemons} />
				) : (
					""
				)}
			</div>
		</div>
	);
}
