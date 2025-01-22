import Home from "./Pages/Home";
import Plants from "./Pages/Plants";
import Cart from "./Pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/plants",
      element: <Plants />,
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
