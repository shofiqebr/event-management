import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  

    const {signIn,user} = useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();
      console.log(location);
    

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [firebaseError, setFirebaseError] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      toast.success("Login successful!", {
        position: "top-right",
        
    });
        navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{

      const errorCode = error.code;
      const errorMessage = error.message;
      
      if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
        setFirebaseError("Invalid email or password.");
      } else {
        setFirebaseError(errorMessage);
      }

      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        
    });
    })
  } 
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card w-[800px] flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
      <p className="text-center text-2xl">please Login</p>
      <form onSubmit={handleLogin}  className=" card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  {firebaseError && (
                  <p className="text-red-500">{firebaseError}</p>
                )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="p-5">do not have an account!please <Link className="text-blue-700" to="/Register">Register</Link></div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
         
    );
};

export default Login;