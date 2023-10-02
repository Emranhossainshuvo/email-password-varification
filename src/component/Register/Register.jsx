

const Register = () => {

    const 

    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h3 className="text-3xl">Register</h3>
                <form className="mt-2">
                    <input className="w-full border-gray-700 border-2 rounded-md py-2 px-4 mb-2" placeholder="Email" type="email" name="email" id="" />
                    <br />
                    <input className="w-full border-gray-700 border-2 rounded-md mb-2 py-2 px-4" type="password" placeholder="Password" name="password" id="" />
                    <br />
                    <input className="w-full btn btn-neutral" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;