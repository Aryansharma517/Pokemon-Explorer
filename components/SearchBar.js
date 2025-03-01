const SearchBar = ({ setSearch }) => {
	return (
		<input
			type="text"
			placeholder="Search Pokémon..."
			className="w-full p-3 border border-gray-400 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
			onChange={(e) => setSearch(e.target.value.toLowerCase())}
		/>
	);
};

export default SearchBar;
