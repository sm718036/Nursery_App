import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate()
  const {cart} = useSelector(state => state.cart)
  return (
    <header className="bg-green-600 px-1 lg:px-4 md:px-4 py-2 text-white flex justify-between items-center">
      <div className="logo text-2xl basis-1/3 cursor-pointer" onClick={()=>navigate('/')}>
        PlantEase
      </div>
      <div className="page_title text-2xl basis-1/3 text-center cursor-pointer" onClick={()=>navigate('/plants')}>
        Plants
      </div>
      <div onClick={()=>{
          navigate("/Cart")
        }} className="cart basis-1/3 cursor">
        <p className="w-fit float-right cursor-pointer">Cart <sup className="px-2 rounded bg-white text-black">{cart.length}</sup></p>
      </div>
    </header>
  );
}

export default NavBar;
