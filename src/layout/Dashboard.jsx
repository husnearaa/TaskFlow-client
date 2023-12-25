import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { MdLogout } from "react-icons/md";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure you want to log out?",
            text: "Once you log out, you will need to log in again.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(res => console.log(res))
                navigate('/')
                Swal.fire({
                    title: "Logged Out!",
                    text: "Logged Out Successfully",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className='flex'>
            <div className="w-[280px]  h-[100vh] sticky top-0  p-[35px] bg-black ">
                <div className='mb-7'>
                    <Link to='/'><h1 className='text-2xl font-bold text-[#4add82] mt-5'>TaskFlow</h1></Link>
                </div>
                <hr />
                <div className='my-10 flex flex-col justify-center space-y-4'>
                    <NavLink className=' text-white hover:text-[#4add82] hover:text-lg' to='/dashboard'>All Task</NavLink>
                    <NavLink className=' text-white hover:text-[#4add82] hover:text-lg' to='/dashboard/addTask'>Add Task</NavLink>
                </div>
                <hr />
                <div className='my-10 flex flex-col justify-center space-y-4'>
                    <NavLink className=' text-white hover:text-[#4add82] hover:text-lg' to='/'>Home</NavLink>
                    <NavLink className=' text-white hover:text-[#4add82] hover:text-lg' to='/contactUs'>Contact Us</NavLink>
                </div>
                <div className="sticky inset-x-0 bottom-0 border-t  border-gray-100">
                    <a href="#" className="flex items-center gap-2  px-4 pt-4 ">
                        <img
                            alt="Man"
                            src={user?.photoURL}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-xs pb-3 ">
                                <strong className="block font-medium text-white">{user?.displayName}</strong>
                            </p>
                        </div>

                    </a>
                    {/* <h1 className='text-xs px-3 pb-3 text-white'>{user?.email}</h1> */}
                </div>
                <div className="sticky inset-x-0 bottom-0  border-gray-100 pt-4 p-2">

                    <button
                        onClick={handleLogOut}
                        className="group relative flex w-full justify-center text-black items-center  rounded-lg px-2 py-1.5 text-sm gap-x-3 btn bg-[#4add82] hover:bg-gray-50 hover:text-gray-700"
                    >
                        <MdLogout className='text-xl'></MdLogout>
                        Logout
                    </button>

                </div>
            </div>
            <div className="flex-1">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;