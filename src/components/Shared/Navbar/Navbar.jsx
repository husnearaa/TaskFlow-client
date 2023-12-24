import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";





const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (



        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 text-base bg-[#262626] ">
                <h2 className="text-3xl font-extrabold dark:text-white text-white">Task<span className="text-[#d88531] ">Flow</span></h2>
                <ul className="flex gap-5 flex-col md:flex-row font-semibold dark:text-white text-white">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d88531] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contactus"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d88531] " : ""
                            }
                        >
                            ContactUs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashbaord"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d88531] " : ""
                            }
                        >
                            DashBoard
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d88531]  " : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li> */}
                </ul>
                {/* <button className="btn border-[#fed700] text-black bg-[#fed700] px-10 rounded-full">Login</button> */}

                {/* <Link to={"/login"}><button className="btn border-[#fed700] text-black bg-[#fed700] px-10 rounded-full">Login</button>
            </Link> */}

                {
                    user ? <>
                        {/* {user?.displayName} */}
                        <span className="text-white">{user?.displayName}</span>
                        <button onClick={handleLogOut} className="btn border-[#d88531] text-black bg-[#d88531] px-10 rounded-md">Logout</button>
                    </> : <>
                        <Link to="/login"><button className="btn border-[#d88531] text-black bg-[#d88531] px-10 rounded-md">Login</button></Link>

                    </>
                }
            </nav>
        </div>
    );
};

export default Navbar;