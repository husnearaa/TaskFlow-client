import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {

    const { register, formState: { errors } } = useForm();


    return (
        <div className="relative min-h-screen">
            <img
                src={'https://i.postimg.cc/Kv22J3vz/login.png'}
                className="absolute h-full w-full "
            />
            <div className=" absolute h-screen w-full place-items-center bg-black/60">
                <h2 className="text-3xl my-8 font-bold text-center text-white">Register</h2>
                <form className="lg:w-1/3 md:w-1/3 w-4/5 mx-auto text-center place-items-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered rounded-md" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered rounded-md" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered rounded-md" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="password" className="input input-bordered rounded-md" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#d88531] text-black  rounded-md border-none" type="submit" value="Sign Up" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#d88531] text-black  rounded-md border-none">
                            <FcGoogle className="text-3xl"></FcGoogle>
                            Log in with Google
                        </button>
                    </div>
                </form>
                {/* {
                loginError && <p className="text-red-700">{loginError}</p>
            }
            {
                success && <p className="text-green-600">{success}</p>
            } */}
                <p className="text-center text-white mb-20">Already have an Account? <Link
                    className="text-white font-bold text-lg mb-10" to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;