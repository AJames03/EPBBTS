import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/PBBTS LOGO.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, query, where, getDocs, setDoc, doc} from 'firebase/firestore';

function OldStudent(){
    const [studentID, setStudentID] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/old-student-form/${studentID}`);
    }
    return(
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-cyan-100 p-5'>
            <div className='xs:w-full sm:w-1/2 lg:w-1/2 h-1/2 flex flex-col items-center rounded-lg bg-white shadow-xl rounded-lg'>
                <h1 className='xl:text-2xl font-bold bg-blue-700 xs:text-base xs:text-center xs:w-full xs:h-20 flex items-center justify-center p-2 text-white rounded-t-lg'>Enrollment For Next School Year</h1>
                <form onSubmit={handleSubmit} className='xs:w-10/12 xs:m-10 lg:w-1/2 h-1/2'>
                    <input type="text" placeholder="Enter Your Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} className='xs:w-full xs:p-3 xs:text-lg xs:text-center xs:font-semibold xs:outline-none xs:border-b-blue-950 border-b-2' required />
                    <button type='submit' className='w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5'>Submit</button>
                    <Link to="/" className='justify-center items-center rounded flex gap-2 mt-5'>
                        Back to Home 
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </form>
                
            </div>
        </div>
    );
};

export default OldStudent;