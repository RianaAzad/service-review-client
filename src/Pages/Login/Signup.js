import React from 'react';

const Signup = () => {
    return (
        <div className="flex flex-col w-full border-opacity-50 hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
    </div>
    <div className="card w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your name here" className="input input-bordered w-96" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up!</button>
        </div>
      </div>
      <div className="divider">OR</div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  </div>
  
</div> 
    );
};

export default Signup;