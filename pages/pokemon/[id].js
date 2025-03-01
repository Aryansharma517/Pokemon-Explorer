import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    };
    fetchPokemon();
  }, [id]);

  if (loading)
    return (
      <Loader />
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-3xl font-semibold text-blue-700 text-center capitalize">
          {pokemon?.name}
        </h2>
        <Image
          src={pokemon?.sprites?.other["official-artwork"].front_default}
          alt={pokemon?.name}
          width={192} // Equivalent to w-48 (48 * 4 = 192px)
          height={192} // Ensure height is set for optimization
          className="mx-auto"
        />
        <h3 className="text-xl font-semibold mt-4 text-gray-700">Abilities:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {pokemon?.abilities?.map((a, index) => (
            <li key={index}>{a.ability.name}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-gray-700">Types:</h3>
        <div>
          {pokemon?.types?.map((t, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mr-2 uppercase"
            >
              {t?.type?.name}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-4 text-gray-700">Stats:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {pokemon?.stats?.map((s, index) => (
            <li key={index}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>

        <Link href="/">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg mt-6 w-full hover:bg-gray-700 transition duration-200">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
