import {
    createBrowserRouter,
  } from "react-router-dom";
  import Root from '../Root';
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TrainingDetails from "../../components/TrainingDetails/TrainingDetails";
import PrivateRoute from "../../components/PrivateRoute";
import MostPopular from "../../Pages/Most popular/MostPopular";
import Blogs from "../../Pages/Blogs/Blogs";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : "/",
            element : <Home></Home>,
            loader :()=> fetch("/data.json")
        },
        
        {
          path :"/Login",
          element : <Login></Login>
        },
        {
          path : "/Register",
          element : <Register></Register>
        },
        {
          path : "/training/:id",
          element : <PrivateRoute>
            <TrainingDetails></TrainingDetails>
          </PrivateRoute>
          // loader :()=> fetch("/data.json")
        },
        {
          path : "/Most popular",
          element : <PrivateRoute><MostPopular></MostPopular></PrivateRoute>
        },
        {
          path: "/Blogs",
          element : <PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
          path : "*",
          element : <NotFound></NotFound>
        }
       
    ]
  },
  ]);

export default router;