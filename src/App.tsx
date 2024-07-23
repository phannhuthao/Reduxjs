import { useEffect } from 'react';
import './App.css';
import Book from './pages/book';
import { useDispatch } from 'react-redux';
import { createStudent, getAllStudents } from './store/slice/studentSlice'; 
import { Student } from './interface';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Tiến hành dispatch lấy danh sách sinh viên");
    // dispatch(getAllStudents()); 
    const newStudent: Student = {
      id: 1,
      name: "Hao",
      address: "Quan 5",
      gender: true,
      phone: "113",
      classId: "DTCNB-07",
      dateOfBirth: "20/5/2005"
    }
    dispatch(createStudent(newStudent))
  }, []);

  return (
    <>
    {/* <Book></Book> */}
    </>
  );
}

export default App;
