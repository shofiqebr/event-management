import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();
      console.log(location);
    

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
    signIn(email,password)
    .then(result => {
        console.log(result.user);

        navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
        console.error(error);
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
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
        </div>
    );
};

export default Login;