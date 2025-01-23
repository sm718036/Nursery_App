import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="h-screen bg-green-700 text-white flex items-center flex-col justify-center gap-4">
      <h1 className="text-4xl font-bold text-center">Welcome to PlantEase</h1>
      <p className="text-gray-300 text-center">
        Your one-stop destination for all things green and beautiful.
      </p>
      <p className="text-gray-300 text-center w-[90%] md:w-[60%] lg:w-[60%]">
        At PlantEase, we are passionate about bringing nature closer to you by
        offering a diverse selection of houseplants, succulents, and outdoor
        plants. Our mission is to make plant shopping easy and accessible,
        whether you're a seasoned gardener or a first-time plant parent. We
        believe that every space deserves a touch of greenery, and we are here
        to help you find the perfect plants to complement your home, office, or
        garden.
      </p>
      <button
        className="bg-white text-green-700 px-4 py-2 rounded cursor-pointer hover:font-semibold"
        onClick={() => navigate("/plants")}
      >
        Browse Our Collection
      </button>
    </main>
  );
}

export default Home;
