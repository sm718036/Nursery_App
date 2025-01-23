import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  checkout,
} from "../redux/cartSlice";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0)
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    const reducedAmount = cart.reduce((amount, item)=>{
      console.log(item)
      return (item.quantity * item.price) + amount
    }, 0)
    setTotalAmount(reducedAmount)
  }, [cart])

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        {cart.length > 0
          ? cart.map((item) => {
              return (
                <div key={item.id} className="border shadow-md flex flex-col mx-2 rounded overflow-hidden md:flex-row sm:flex-row">
                  <img
                    src={item.imgUrl}
                    alt={`picture of ${item.name}`}
                    className="w-full object-cover"
                  />
                  <div className="w-full flex flex-col justify-evenly items-center p-2 gap-2">
                    <div>
                      <h4 className="text-4xl font-bold">{item.name}</h4>
                      <h4 className="font-semibold">${item.price}</h4>
                    </div>
                    <div>
                      <div className="text-2xl flex gap-2">
                        <h3>Quantity: </h3>
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="bg-red-500 text-white px-2 w-[30px] rounded flex items-center justify-center"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="bg-green-500 text-white px-2 w-[30px] rounded flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <h5 className="text-xl">
                        Item total: <span>${item.quantity * item.price}</span>
                      </h5>
                    </div>
                    <button
                      className="bg-red-500 px-2 py-1 text-white rounded"
                      onClick={() => {
                        dispatch(removeFromCart(item));
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              );
            })
          : "Please add something to the cart."}
      </div>
      <p className="text-center mt-8 text-xl">Total Amount of Cart: <span className="font-semibold">$ {totalAmount}</span></p>
      <div className="flex flex-col items-center gap-4 mt-8">
        <button
          className="bg-green-500 text-white px-4 py-1 w-[150px] rounded"
          onClick={() => {
            navigate("/plants");
          }}
        >
          Shop More
        </button>
        <button className={`${cart.length?'bg-green-500 text-white':'bg-green-200 text-gray-500 cursor-not-allowed'} px-4 py-1 w-[150px] rounded`} onClick={()=>dispatch(checkout())}>
          Checkout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
