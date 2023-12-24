import { Link } from "react-router-dom";
import img from '../../assets/giphy.gif';

const Banner = () => {


    return (
        <div className=' w-full h-[550px] flex justify-between items-center'>
            <div className='py-36 w-1/2 ml-36 mr-16'>
                <h1 className='text-5xl font-bold pb-3'>Boost Your Efficiency</h1>
                 <h1 className='text-2xl font-bold pb-3'>TaskFlow - Elevate Your Workflow with Effortless Task Mastery</h1>
                <Link to='/dashboard'><button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 btn text-xl font-bold text-slate-900 mt-8">
                Let’s Explore
                </button></Link>
            </div>
            <div className='w-1/2 mx-auto ml-10'>
                <img className="border-[#add65c] border-2" src={img} alt="" />
            </div>

        </div>
    );
};

export default Banner;