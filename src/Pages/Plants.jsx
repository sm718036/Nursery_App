import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import PlantCategories from "../Components/PlantCategories";

function Plants() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <PlantCategories />
      <Footer />
    </main>
  );
}

export default Plants;
