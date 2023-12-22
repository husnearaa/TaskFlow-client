import {  NavLink } from "react-router-dom";





const Navbar = () => {



    return (



        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 text-base ">
                <h2 className="text-3xl font-extrabold dark:text-white">Task<span className="text-[#d88531] ">Flow</span></h2>
                <ul className="flex gap-5 flex-col md:flex-row font-semibold dark:text-white">
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
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d88531]  " : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contactUs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d88531] " : ""
                            }
                        >
                            ContactUs
                        </NavLink>
                    </li>
                </ul>
                <button className="btn border-[#d88531]  text-black bg-white px-10 rounded-md">Login</button>
                
                {/* {
                    user ? <>
                        <span className="dark:text-white">{}</span>
                        <button onClick={handleSignOut} className="btn border-[#C2A973] text-black bg-white px-10 rounded-full">Sign Out</button>
                    </>
                        :
                        <Link to='/login'>
                            <button className="btn border-[#C2A973] text-black bg-white px-10 rounded-full">Login</button>
                        </Link>
                } */}
            </nav>
        </div>
    );
};

export default Navbar;