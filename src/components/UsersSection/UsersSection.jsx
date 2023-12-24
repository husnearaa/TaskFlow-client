import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const UsersSection = () => {


    useEffect(() => {
        Aos.init();
    }, [])


    const userTypes = [
        {
            title: 'Developers',
            description: 'Smoothly navigate project intricacies and timelines, ensuring a fluid and harmonious development process.',
        },
        {
            title: 'Corporate Professionals',
            description: 'Enhance daily task organization and elevate productivity through seamless project collaboration management.',
        },
        {
            title: 'Bankers',
            description: 'Master the art of handling financial tasks and meeting deadlines effortlessly with the intuitive features of TaskFlow.',
        },
        // Add more user types as needed
    ];

    return (
        <div className=" py-20 px-32">
            <div className="mx-auto text-center">
                <h2 className="text-4xl text-slate-900 font-bold mb-10">TaskFlow Users</h2>

                <div className="flex justify-center flex-col md:flex-row">
                    {userTypes.map((userType, index) => (
                        <div key={index} className="max-w-md mx-4 mb-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{userType.title}</h3>
                            <p className="text-white/90">{userType.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsersSection;