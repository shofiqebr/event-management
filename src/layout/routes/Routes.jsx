import {
    createBrowserRouter,
  } from "react-router-dom";
  import Root from '../Root';
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TrainningDetails from "../../components/TrainingDetails/TrainningDetails";
import PrivateRoute from "../../components/PrivateRoute";



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
          path : "*",
          element : <NotFound></NotFound>
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
            <TrainningDetails></TrainningDetails>
          </PrivateRoute>
        }
       
    ]
  },
  ]);

export default router;