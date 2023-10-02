import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {



    const [showError, setShowError] = useState('');

    const [success, setSuccess] = useState('');




    const handleLogin = e => {
        e.preventDefault()
        // reset
        setShowError('');
        setSuccess('');
        // reset
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // 
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('You have loged in')
            })
            .catch(error => {
                console.log(error)
                setShowError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        showError && <p className="text-red-700 mb-2 text-xl ms-4 font-semibold">{showError}</p>
                    }
                    {
                        success && <p className="text-green-700 mb-2 text-xl ms-4 font-semibold">{success}</p>
                    }
                    <p>New to Vocal Cove? Please <Link to="/register">register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;