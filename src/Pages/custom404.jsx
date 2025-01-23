import {NavLink} from "react-router-dom";

function Custom404() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[#f4f4f9] text-[#333]">
      <h1 className="text-8xl text-[#ff6b6b]">404</h1>
      <p className="text-2xl my-3 text-[#555]">Oops! The page you’re looking for doesn’t exist.</p>
      <p>It might have been moved or deleted.</p>
      <NavLink to="/" className='inline-block mt-5 px-5 py-3 text-xl text-white bg-green-500 rounded hover:bg-green-700'>Go Back Home</NavLink>
    </div>
  );
}

export default Custom404;
