import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import logo from '../../assets/PBBTS LOGO.png';
import { collection, addDoc, query, where, getDocs, setDoc, doc} from 'firebase/firestore';

function NewStudent() {
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [bday, setBday] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [barangay, setBarangay] = useState('');
  const [municipal, setMunicipal] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [church, setChurch] = useState('');
  const [pastor, setPastor] = useState('');
  const schoolYear = ["first year"];
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try{
      const studentRef = collection(db, "students");

      const q = query(studentRef,
        where("fname", "==", fname),
        where("mname", "==", mname),
        where("lname", "==", lname),
        where("bday", "==", bday),
        where("age", "==", age),
        where("gender", "==", gender)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        alert("Student already exists");
        return;
      }

      const currentYear = new Date().getFullYear().toString();
      const snapshot = await getDocs(studentRef);
      const yearStudents = snapshot.docs.filter(doc =>
        doc.id.startsWith(currentYear)
      );

      const count = yearStudents.length + 1;
      const studentId = `${currentYear}-${count.toString().padStart(3, '0')}`;

      await setDoc(doc(studentRef, studentId), {
        fname: fname,
        mname: mname,
        lname: lname,
        bday: bday,
        age: age,
        gender: gender,
        address: address,
        barangay: barangay,
        municipal: municipal,
        city: city,
        contact: contact,
        email: email,
        church: church,
        pastor: pastor,
        schoolYear: schoolYear
      });
      navigate("/done-sub");

    }catch(error){
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
    finally{
      setLoading(false);
    }
  };
  if(loading){
      return(
          <div className='w-screen h-screen flex flex-col items-center justify-center'>
              <img src={logo} alt="PBBTS LOGO" className='w-14 m-1 flex'></img>
              <label className='xl:text-2xl xs:text-lg xs:text-center xs:w-3/4'>Loading ...</label>
          </div>
      );
  }
  return (
    <div className='sticky p-5 bg-cyan-100 flex justify-center'>
      <div className='lg:w-2/5 h-2/5 flex flex-col items-center gap-4 xs:w-full sm:w-1/2'>
        <div className='w-full bg-blue-900 p-5 flex flex-col items-center rounded-md shadow-lg'>
          <label className='lg:text-2xl font-bold uppercase text-white xs:text-base'>PBBTS Enrollment System</label>
          <label className='text-sm font-semibold uppercase text-white'>For New Students</label>
        </div>
        <form onSubmit={handleSubmit} className='w-full h-full flex flex-col gap-5'>
          
          <div className='w-full bg-white p-8 gap-3 flex flex-col rounded-md shadow-lg'>
            <i className='font-bold xs:text-sm'>First Name: *</i>
            <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
            <i className='font-bold xs:text-sm'>Middle Name: *</i>
            <input type="text" value={mname} onChange={(e) => setMname(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
            <i className='font-bold xs:text-sm'>Last Name: *</i>
            <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
          </div>

          <div className='w-full bg-white p-8 gap-3 flex flex-col rounded-md shadow-lg'>
            
            <i className='font-bold xs:text-sm'>Birthday: *</i>
            <input type="date" value={bday} onChange={(e) => setBday(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>       
            <i className='font-bold xs:text-sm'>Age: *</i>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
            <i className='font-bold xs:text-sm'>Gender: *</i>
            
            <div className='w-1/4 flex flex-col items-start gap-2'>
              <span className='flex flex-row h-3.5 justify-center items-center gap-2'>
                <input type="radio" value={"Male"} name="gender" onChange={(e) => setGender(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none' required/>
                <label className='xs:text-sm'>Male</label>
              </span>
              <span className='flex flex-row h-3.5 justify-center items-center gap-2'>
                <input type="radio" value={"Female"} name="gender" onChange={(e) => setGender(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none' required/>
                <label className='xs:text-sm'>Female</label>
              </span>
            </div>
          </div>

          <div className='w-full bg-white p-8 gap-3 flex flex-col rounded-md shadow-lg'>
            <i className='font-bold xs:text-sm'>Block/Lot/Phase/Street Name/Subdivision: *</i>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
            <i className='font-bold xs:text-sm'>Barangay: *</i>
            <input type="text" value={barangay} onChange={(e) => setBarangay(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
            <i className='font-bold xs:text-sm'>Municipal: *</i>
            <input type="text" value={municipal} onChange={(e) => setMunicipal(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
            <i className='font-bold xs:text-sm'>Province/City: *</i>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
          </div>

          <div className='w-full bg-white p-8 gap-3 flex flex-col rounded-md shadow-lg'>
            <i className='font-bold xs:text-sm'>Contact Number: *</i>
            <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm'/>
            <i className='font-bold xs:text-sm'>Email: *</i>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm'/>
          </div>

          <div className='w-full bg-white p-8 gap-3 flex flex-col rounded-md shadow-lg'>
            <i className='font-bold xs:text-sm'>Church Name: *</i>
            <input type="text" value={church} onChange={(e) => setChurch(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
            <i className='font-bold xs:text-sm'>Church Pastor: *</i>
            <input type="text" value={pastor} onChange={(e) => setPastor(e.target.value)} className='w-full p-2 border-2 rounded-md outline-none xs:h-9 xs:text-sm' required/>
          </div>

          <input type='hidden' value={schoolYear} readOnly/>

          <button type="submit" className='bg-blue-950 text-white p-2 rounded-lg font-semibold hover:bg-blue-900 xs:h-10'>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default NewStudent;
