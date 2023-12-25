import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";





const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);


    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.log(error));
    // }

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure to log out?",
            text: "Once you logout you have to login again",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(res => console.log(res))
                Swal.fire({
                    title: "Logged Out!",
                    text: "Your Account logged Out Successfully",
                    icon: "success"
                });
            }
        });
    }


    return (



        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 bg-black px-6 text-base shadow-xl">
                <h2 className="text-3xl font-extrabold dark:text-white text-white">Task<span className="text-[#4add82] ">Flow</span></h2>
                <ul className="flex gap-5 flex-col md:flex-row font-semibold dark:text-white text-white">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#4add82] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contactus"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#4add82] " : ""
                            }
                        >
                            ContactUs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashbaord"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#4add82] " : ""
                            }
                        >
                            DashBoard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#4add82]  " : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
                {/* <button className="btn border-[#fed700] text-black bg-[#fed700] px-10 rounded-full">Login</button> */}

                {/* <Link to={"/login"}><button className="btn border-[#fed700] text-black bg-[#fed700] px-10 rounded-full">Login</button>
            </Link> */}

                <div>
                    {
                        user ?
                            <>
                                <div className="flex justify-between items-center ">
                                    <div className="w-1/2 pr-1 flex justify-between bg-transparent">
                                        <h1 className="text-white">{user?.displayName}</h1>
                                        <img className='rounded-full w-[35px] md:w-[40px] h-[35px] md:h-[40px]' src={user?.photoURL} alt='' />
                                    </div>
                                    <button onClick={handleLogOut} className="btn text-slate-900 bg-[#4add82] px-10 rounded-md">
                                        Logout
                                    </button>
                                </div>
                            </>
                            :
                            <NavLink to='/login'>
                                <li className="btn border-none text-slate-900 bg-[#4add82] px-10 rounded-md">
                                    <a>Log in</a>
                                </li>
                            </NavLink>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;