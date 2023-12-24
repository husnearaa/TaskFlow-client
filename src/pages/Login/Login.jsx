


import { Link} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";




const Login = () => {
   

    return (
        <div className="relative min-h-screen ">
            <img
                src={'https://i.postimg.cc/Kv22J3vz/login.png'}
                className="absolute h-full w-full "
            />
            <div className=" absolute h-screen w-full place-items-center bg-black/60">
                <h2 className="text-3xl my-8 font-bold text-center text-white">Login</h2>
                <form className="lg:w-1/3 md:w-1/3 w-4/5 mx-auto text-center place-items-center">
                    <div className="form-control">

                        <input type="email" placeholder="Email" name="email" className="input input-bordered
                        mb-5 rounded-md" required />
                    </div>
                    <div className="form-control">

                        <input type="password" placeholder="Password" name="password" className="input input-bordered
                         mb-5 rounded-md" required />

                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#d88531] text-black mb-5 rounded-md border-none">Sign In</button>
                    </div>
                    <div className="form-control">
                        <button  className="btn bg-[#d88531] text-black  rounded-md border-none">
                            <FcGoogle className="text-3xl"></FcGoogle>
                            Log in with Google
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4 mb-20 pb-5 text-white text-sm">Don't have an Account?
                    <Link to={'/register'} className="text-white font-bold text-base mb-10">Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;