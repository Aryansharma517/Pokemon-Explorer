const Pagination = ({ prevUrl, nextUrl, fetchPokemons }) => {
	return (
		<div className="flex justify-center mt-8 space-x-4">
			{prevUrl && (
				<button
					onClick={() => fetchPokemons(prevUrl)}
					className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
				>
					Previous
				</button>
			)}
			{nextUrl && (
				<button
					onClick={() => fetchPokemons(nextUrl)}
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
				>
					Next
				</button>
			)}
		</div>
	);
};

export default Pagination;
