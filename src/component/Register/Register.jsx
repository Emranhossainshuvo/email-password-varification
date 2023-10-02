import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FiEyeOff, FiEye } from 'react-icons/fi';


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [registerError, setRegisterError] = useState('');

    const [success, setSuccess] = useState('')

    const handleRegister = e => {
        e.preventDefault();

        // clear previous errors
        setRegisterError('')
        setSuccess('')
        // clear previous errors


        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsAndConditions = e.target.terms.checked;
        console.log(email, password, termsAndConditions)

        // password check condition

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Strong password requares at least one uppar case character')
            return;
        }
        else if(!termsAndConditions){
            setRegisterError("please accept our terms and conditions")
            return; 
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Registered 🥰🥰')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }

    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h3 className="text-3xl">Register</h3>
                <form className="mt-2" onSubmit={handleRegister}>
                    <input className="w-full border-gray-700 border-2 rounded-md py-2 px-4 mb-2" required placeholder="Email" type="email" name="email" id="" />
                    <br />
                    <div className="relative">
                        <input
                            className="w-full border-gray-700 border-2 rounded-md  py-2 px-4"
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Password"
                            name="password"
                            id="" />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FiEyeOff></FiEyeOff> : <FiEye />
                            }
                        </span>
                    </div>
                    <br />
                    <div className="mb-1">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ms-2" htmlFor="terms">Accept out <a href="">terms and conditions</a></label>
                    </div>
                    <br />
                    <input className="w-full btn btn-neutral" type="submit" value="Submit" />
                </form>
                {
                    registerError && <p className="text-red-800 mt-3 text-xl ms-2 font-medium">{registerError}</p>
                }
                {
                    success && <p className="text-green-800 mt-3 text-xl ms-2 font-medium">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;