import '../assets/css/App.scss';
import '../assets/css/student.scss';
import StudentForm from '../components/StudentForm';

function NewStudent({ students, setStudents }) {
    const addStudent = (newStudent) => {
        setStudents((previousStudent) => [...previousStudent, newStudent]);
    };

    return (
        <div className="app">
            <h1>Add New Student</h1>

            <section className="form-wrapper">
                <div>
                    <StudentForm addStudent={addStudent} students={students} />
                </div>
            </section>
        </div>
    );
}

export default NewStudent;
