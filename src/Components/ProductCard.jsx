import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {useState,useEffect} from 'react'

function ProductCard({product}) {
  const {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false)

  useEffect(()=>{
    if(cart.find(item => item.id === product.id)){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  }, [cart])

  return (
    <div
      key={product.id}
      className="flex flex-col justify-between items-center border shadow-md rounded overflow-hidden w-[250px] h-[300px]"
    >
      <img
        src={product.imgUrl}
        alt={`Picture of ${product.name}`}
        className="w-full h-[150px]"
      />
      <div className="flex flex-col gap-1 w-full px-4">
        <div className="flex justify-between font-bold">
          <h4>{product.name}</h4>
          <h4>${product.price}</h4>
        </div>
        <p className="text-center text-gray-600">{product.description}</p>
      </div>
      <button
        className={`${disabled ? 'bg-green-200 text-gray-500 cursor-not-allowed' : ' bg-green-500 text-white'} w-[95%] py-1 mb-2 rounded`}
        onClick={() => {
          dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            imgUrl: product.imgUrl,
            description: product.description,
            quantity: 1,
          }))
        }}
        disabled={disabled}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
