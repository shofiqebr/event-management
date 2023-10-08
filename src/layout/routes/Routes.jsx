import {
    createBrowserRouter,
  } from "react-router-dom";
  import Root from '../Root';
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path : "*",
          element : <NotFound></NotFound>
        }
    ]
  },
  ]);

export default router;