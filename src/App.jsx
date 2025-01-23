import Home from "./Pages/Home";
import Plants from "./Pages/Plants";
import Cart from "./Pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Custom404 from './Pages/custom404';

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
    },
    {
      path: '*',
      element: <Custom404 />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
