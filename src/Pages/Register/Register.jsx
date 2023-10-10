import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const [firebaseError, setFirebaseError] = useState("");

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email,password);

    const minLength = 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (password.length < minLength) {
        setPasswordError("Password must be at least 6 characters long.");
        return;
    }

    if (!hasCapitalLetter) {
        setPasswordError("Password must contain at least one capital letter.");
        return;
    }

    if (!hasSpecialCharacter) {
        setPasswordError("Password must contain at least one special character.");
        return;
    }





    createUser(email,password)
    .then(result =>{
      toast.success("Login successful!", {
        position: "top-right",
    });
    })
    .catch((error)=>{
      const errorMessage = error.message;
      setFirebaseError(errorMessage);
      setPasswordError("");
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
    });
    })




    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card w-[800px] flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
      <p className="text-center text-2xl">please Register</p>
      <form onSubmit={handleRegister} className=" card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input name='address' type="text" placeholder="Address" className="input input-bordered" required />
        </div>
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
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          {firebaseError && <p className="text-red-500">{firebaseError}</p>}
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className="p-5">already have an account!please <Link className="text-blue-700" to="/Login">Login</Link></div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Register;