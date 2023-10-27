import '../assets/css/App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { studentData } from '../service/data';
import StudentsOverview from '../pages/StudentsOverview';
import NewStudent from '../pages/NewStudent';
import StudentDetails from '../pages/StudentDetails';

function App() {
    const [students, setStudents] = useState([]);
    setStudents();

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StudentsOverview students={students} setStudents={setStudents} />} />
                    <Route path={`students/:studentId`} element={<StudentDetails students={students} />} />
                    <Route
                        path={`students/create`}
                        element={<NewStudent students={students} setStudents={setStudents} />}
                    />
                    <Route path="*" element={<h1>404 - Page not found!</h1>} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </div>
    );
}

export default App;
