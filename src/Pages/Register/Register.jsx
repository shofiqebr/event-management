import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email,password);
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
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className="p-5">already have an account!please <Link className="text-blue-700" to="/Login">Login</Link></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;