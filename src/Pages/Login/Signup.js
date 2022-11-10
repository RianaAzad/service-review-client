import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {

    const {createUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(e => {
            console.error(e)
        })
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(e => console.error(e))
    }

    return (
        <div className="flex flex-col w-full border-opacity-50 hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
    </div>

    <form onSubmit={handleSignUp}>
    <div className="card w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your name here" className="input input-bordered w-96" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up!</button>
        </div>
      </div>
      <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle></FaGoogle></button>
        
    </div>
    </form>

    <p>Already have an account? <Link className='text-cyan-500 font-bold' to='/login'>Log In</Link></p>
  </div>
  
</div> 
    );
};

export default Signup;