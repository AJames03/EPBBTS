import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/PBBTS LOGO.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-screen h-screen flex flex-col items-center'>
        <div className='w-full bg-blue-900 p-5 flex flex-col items-center'>
            <img src={logo} alt="PBBTS LOGO" className='w-14 m-1'/>
            <h1 className='xl:text-2xl font-bold uppercase text-white xs:text-base xs:text-center xs:w-3/4'>Pilgrim Bible Baptist Theological Seminary</h1>
            <label className='text-sm text-white'>Enrollment System</label>
        </div>

        <div className='w-full h-96 flex flex-col justify-center items-center gap-5 p-5'>
            <Link to="/new-student" className='bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded xl:w-80 xs:w-3/4 sm:w-80'>
                <div className='flex flex-row items-center gap-4 xl:text-xl'>
                    <i className="bi bi-person-plus-fill border-r-2 pr-5"></i>
                    <label >New Students</label>
                </div>
            </Link>
            <Link to="/old-student" className='bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded xl:w-80 xs:w-3/4 sm:w-80'>
                <div className='flex flex-row items-center gap-4 xl:text-xl'>
                    <i className="bi bi-person-fill border-r-2 pr-5"></i>
                    <label>Old Students</label>
                </div>
            </Link>
        </div>
        <div className='fixed bottom-5 right-5'>
            <button onClick={() => setIsOpen(true)} className='w-15 h-15 relative'>
                <i className="bi bi-info-circle-fill text-blue-900 text-4xl xs:text-3xl"></i>
            </button>
        </div>

        {isOpen && (
            <div>
                <span  className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center' onClick={() => setIsOpen(false)}></span>
                <div className='fixed animate-fadeIn lg:w-1/2 h-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded shadow-lg overflow-x-hidden scroll-m-0 xs:w-10/12'>
                    <button onClick={() => setIsOpen(false)} className="absolute top-0 right-4 text-3xl text-gray-500 hover:text-blue-500">&times;</button>
                    <h1 className='text-2xl font-bold text-blue-700 font-extrabold flex flex-row items-center mb-5'>ABOUT</h1>
                    
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-center w-full font-semibold text-xl border-b-4 border-blue-900 xs:text-base sm:text-lg'>“TRAINING GOD’S SERVANT FOR THE SERVICE OF CHRIST”</h2>
                        <label className='xs:text-sm sm:text-base'><i className="bi bi-dot"></i>Basic Bible Course  (1 Year)</label>
                        <label className='xs:text-sm sm:text-base'><i className="bi bi-dot"></i>Associate in Biblical Studies (2 Years)</label>
                        <label className='xs:text-sm sm:text-base'><i className="bi bi-dot"></i>Graduate of Theology ( 3 Years)</label>
                        <label className='border-b-4 border-blue-900 pb-4 xs:text-sm sm:text-base'><i className="bi bi-dot"></i>Graduate of Christian Education (3 Years)</label>

                        <h2 className='text-center w-full font-semibold text-xl'>“FOR NEW STUDENTS”</h2>
                        <p className='text-justify xs:text-sm sm:text-base'>
                            Welcome to Pilgrim Bible Baptist Theological Seminary! This enrollment system is designed to make your admission process fast and simple. As a new student, you'll be guided through the steps to register your personal information.
                        </p>

                        <h2 className='text-center w-full font-semibold text-xl'>“FOR OLD STUDENTS”</h2>
                        <p className='text-justify xs:text-sm sm:text-base'>
                            Welcome back to Pilgrim Bible Baptist Theological Seminary! This enrollment system allows returning students to quickly re-enroll, update their information, and proceed with their next term of study. We’re thankful for your continued commitment to deepening your understanding of God's Word. May your spiritual and academic journey continue to grow stronger with each semester.
                        </p>
                        <div className='bg-blue-900 p-2 rounded text-white'>
                            <label className='gap-2 flex flex-row'>
                                <i className="bi bi-facebook"></i>
                                <label>Pilgrimbbts</label>
                            </label>
                            <label className='gap-2 flex flex-row'>
                                <i className="bi bi-envelope-fill"></i>
                                <label>pilgrimbbts@gmail.com</label>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default Home;
