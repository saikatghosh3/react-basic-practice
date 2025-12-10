import React, { useState } from 'react'

const StudentAttandance = () => {

    const [ studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);
    const [ editMode, setEditMode] = useState(false);
    const [editableStuent, setEditableStudent] = useState(null);
            

    // handlers 

    const submitHandler = (e)=>{
        e.preventDefault();
        if(studentName.trim()=== ""){
            return alert ("please provide a valid name")
        }
    };

    const changeNameHandler =(e)=>{
        setStudentName(e.target.value);
    };
        
    const createHandler =(e)=>{

    }
    const editHandler = ()=>{

    }
     
    const updateHandler =()=>{

    }

       const removeHandler =()=>{
          
       }
     
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
       <input type="text"
       value={studentName}
       onChange={changeNameHandler}
       />
       <button type='submit'
        
       >

       </button>
        <div className="student-section">
            <div className="all-students">
                <h2 className='text-black text-2xl'>All Student</h2>
                <ul>
                    {students.map((student)=>(
                        <li key={student.id}>
                            <span>{student.name}</span>
                            <button>Edit</button>
                            <button>Delete</button>
                            <button>Make Present</button>
                            <button>Make Absent</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="present-students">
                <h2>present student</h2>
            </div>
            <div className="absent-students">
                <h2>absent student</h2>
            </div>
        </div>

      </form>
    </div>
  )
}

export default StudentAttandance
