import React, { useState, useEffect, use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/PBBTS LOGO.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function SubmissionComplete() {
    return (
        <div className='w-screen h-screen flex flex-col items-center bg-cyan-100 p-5'>
            <div className='xs:w-full lg:w-1/2 h-1/2 flex flex-col items-center rounded-lg border-solid border-4 border-blue-800'>
                <div className='w-full p-5 flex flex-col items-center bg-blue-800'>
                    <img src={logo} alt="PBBTS LOGO" className='w-14 m-1'/>
                    <h1 className='xl:text-2xl font-bold uppercase text-white xs:text-lg xs:text-center xs:w-3/4'>DONE SUBMISSION</h1>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center bg-white lg:p-5 xs:p-2 text-center'>
                    <label className='xs:text-sm'>Welcome to Pilgrim Bible Baptist Theological Seminary. You are now a student of PBBTS. We hope that you'll be dedicated to serving the Lord, and continue to grow spiritually.</label>
                </div>
            </div>
            <Link to="/" className='font-semibold py-2 px-4 rounded mt-5 flex gap-2'>
                Back to Home 
                <i className="bi bi-arrow-right"></i>
            </Link>
        </div>
    );
}

export default SubmissionComplete;
