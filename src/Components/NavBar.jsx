import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  return (
    <header className="bg-green-600 px-1 lg:px-4 md:px-4 py-2 text-white flex justify-between items-center">
      <div
        className="logo text-2xl basis-1/3 cursor-pointer"
      >
        PlantEase
      </div>
      <div className="flex gap-2 md:gap-8">
        <div
          className="text-xl basis-1/3 text-center cursor-pointer"
        >
          <NavLink to='/' className='text-gray-200 hover:text-white hover:underline'>Home</NavLink>
        </div>
        <div
          className="text-xl basis-1/3 text-center cursor-pointer"
        >
          <NavLink to='/plants' className='text-gray-200 hover:text-white hover:underline'>Plants</NavLink>
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/Cart");
        }}
        className="cart basis-1/3 cursor"
      >
        <p className="w-fit float-right cursor-pointer">
          Cart{" "}
          <sup className="px-2 rounded bg-white text-black">{cart.length}</sup>
        </p>
      </div>
    </header>
  );
}

export default NavBar;
