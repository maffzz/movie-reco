import { useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  genre: string;}

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  const getRandomMovie = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/random-movie");
      setMovie(res.data);} 
    catch (err) {
      alert("❌ error al obtener película");}
    setLoading(false);};

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#d6eadf] to-[#b1bdb9] flex flex-col items-center justify-center text-[#2c2c2c] p-6">
    <h1 className="text-4xl font-bold mb-8 text-[#6e827d]">🎬 película aleatoria</h1>

    <button
      onClick={getRandomMovie}
      className="bg-[#4a7b76] hover:bg-[#80af9a] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
    >
      {loading ? "cargando..." : "elegir película"}
    </button>

    {movie && (
      <div className="mt-10 p-6 bg-[#4a7b76] rounded-xl shadow-xl text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-[#000000] text-lg">🎞 género: {movie.genre}</p>
      </div>
    )}
  </div>
  );
}

export default App;