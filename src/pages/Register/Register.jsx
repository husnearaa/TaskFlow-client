
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);


        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);


        // reset error and success
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/.test(password)) {
            setRegisterError,
                Swal.fire("Oops!", "Your password should have length at least 6 character one upper case and one special characters!", "error");
            return;
        }


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess,
                    Swal.fire("Good job!", "User Created Successfully!", "success");

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })

    }

    return (
        <div className="relative min-h-screen ">
            <img
                src={'https://i.postimg.cc/Kv22J3vz/login.png'}
                className="absolute h-full w-full "
            />
            <div className=" absolute h-screen w-full place-items-center bg-black/60">
                <h2 className="text-3xl my-10 font-bold text-center text-white">Registration</h2>
                <form onSubmit={handleRegister} className="lg:w-1/3 md:w-1/3 w-4/5 mx-auto text-center place-items-center">
                    <div className="form-control">
                        <input type="text" placeholder="Name" name="name" className="input input-bordered rounded-md mb-5" required />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered rounded-md mb-5" required />
                    </div>
                    <div className="form-control">
                       
                        <input type="email" placeholder="Email" name="email" className="input input-bordered rounded-md mb-5" required />
                    </div>
                    <div className="form-control">
                        
                        <input type="password" placeholder="Password" name="password" className="input mb-5 input-bordered rounded-md" required />
                       
                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#d88531] text-white mb-5 rounded-md border-none">Sign Up</button>
                    </div>
                </form>
                <p className="text-center text-white">Already have an Account? <Link
                    className="text-white font-bold" to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;