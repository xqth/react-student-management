import '../assets/css/student.scss';
import { Link } from 'react-router-dom';

function StudentCard({ student, onRemove }) {

    const birthdate =
        student.birthdate instanceof Date ? student.birthdate.toLocaleDateString('en-US') : student.birthdate;

    return (
        <article className="card">
            <img className="profile-image" src={student.img} alt="Profile Picture" />
            <h3>{student.name}</h3>
            <p>Date of Birth: {birthdate}</p>
            <p>Location: {student.city}</p>
            <p>Study: {student.study}</p>
            <button>
                <Link to={`/students/${student.id}`}>Student Details</Link>
            </button>
            <button className="btn-delete-student" onClick={() => onRemove(student.id)}>
                Delete Student
            </button>
        </article>
    );
}

export default StudentCard;
