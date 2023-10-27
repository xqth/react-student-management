import '../assets/css/App.scss';
import '../assets/css/student.scss';
import { Link } from 'react-router-dom';

import StudentCard from '../components/Student';

function StudentsOverview({ students, setStudents }) {
    function handleRemove(id) {
        if (!students.find((student) => student.id = id)) {
            alert('This student does not exist!');
            return;
        }
        setStudents(students.filter((student) => student.id !== id));
    }

    return (
        <div className="app">
            <h1>Student Management</h1>

            <section className="students">
                {students.map((student) => (
                    <StudentCard student={student} key={student.id} onRemove={handleRemove} />
                ))}
            </section>
            <div>
                <button className="button">
                    <Link to="/students/create">Add Student</Link>
                </button>
            </div>
        </div>
    );
}

export default StudentsOverview;
