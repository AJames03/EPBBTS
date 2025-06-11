import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../../assets/PBBTS LOGO.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, query, where, getDoc, setDoc, doc, arrayUnion} from 'firebase/firestore';

function OSForm(){
    
    type student = {
        fname: string;
        mname: string;
        lname: string;
    };
    const navigate = useNavigate();
    const {studentID} = useParams();
    const [studentData, setStudentData] = useState<student | null>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [schoolYear, setSchoolYear] = useState('');

    useEffect(() => {
        const fetchStudent = async () => {
            if(!studentID) return;
            try{
                const studentRef = doc(db, 'students', studentID);
                const docSnap = await getDoc(studentRef);
                if (docSnap.exists()) {
                    setStudentData(docSnap.data() as student);
                }
                else{
                    setError('Student not found');
                }

            }
            catch(error){
                if(error instanceof Error){
                    setError(error.message);
                }
            }
            finally{
                setLoading(false);
            }
        };
        fetchStudent();
    }, [studentID]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        if (!studentID || !schoolYear) return;

        try {
            const studentRef = doc(db, 'students', studentID);
            await setDoc(studentRef, { schoolYear: arrayUnion(schoolYear) }, { merge: true });
        } catch (error) {
            if (error instanceof Error) {
            setError(error.message);
            }
        }
        finally{
            setIsLoading(false);
            navigate('/');
        }
    };
    
    return(
        <div>
            {(loading || isLoading) && (
            <div className='w-screen h-screen flex flex-col items-center justify-center'>
                <img src={logo} alt="PBBTS LOGO" className='w-14 m-1 flex' />
                <label className='xl:text-2xl xs:text-lg xs:text-center xs:w-3/4'>Loading ...</label>
            </div>
            )}

            {error && !loading && !isLoading && (
            <div className='w-screen h-screen flex flex-col items-center justify-center'>
                <i className="bi bi-search lg:text-4xl xs:text-3xl"></i>
                <label className='xl:text-2xl xs:text-lg xs:text-center xs:w-3/4'>{error}</label>
                <Link to="/old-student" className='bg-blue-900 text-white w-40 flex justify-between font-semibold py-2 px-4 rounded mt-5 flex gap-2'>
                    Back 
                    <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
            )}

            {!loading && !isLoading && !error && (
            <div className='w-screen h-screen flex flex-col items-center bg-cyan-100 p-5'>
                <div className='xs:w-full lg:w-1/2 bg-blue-900 flex flex-col items-center justify-center p-2 rounded-lg'>
                <img src={logo} alt="PBBTS LOGO" className='xs:w-10 lg:w-14 m-1 flex' />
                <label className='xs:text-xl text-center font-bold text-white'>Pilgrim Bible Baptist Theological Seminary</label>
                <label className='xs:text-sm text-center text-white'>Register for Next School Year</label>
                </div>

                <div className='bg-white xs:w-full xs:m-2 lg:w-1/2 p-5 rounded-lg'>
                <label className='xl:text-xl xs:text-lg xs:w-3/4 text-left '>
                    Hello! {studentData?.fname} {studentData?.mname} {studentData?.lname}. Please select your year for the next school year.
                </label>
                </div>

                <form className='bg-white xs:w-full xs:m-2 lg:w-1/2 p-5 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='text-lg italic font-semibold'>Select Year *</h1>
                <select 
                    className='w-full p-2 border border-gray-300 rounded'
                    value={schoolYear}
                    name="schoolYear"
                    onChange={(e) => setSchoolYear(e.target.value)}
                    required
                >
                    <option value={""} disabled>Select Year</option>
                    <option value={"Second Year"}>Second Year</option>
                    <option value={"Third Year"}>Third Year</option>
                    <option value={"Fourth Year"}>Fourth Year</option>
                </select>
                <button type='submit' className='w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5'>Submit</button>
                </form>
            </div>
            )}
        </div>
    );
};

export default OSForm;