import '../assets/css/App.scss';
import '../assets/css/student.scss';
import '../assets/css/details.scss';
import { fake } from '@faker-js/faker';
import { Link, useParams } from 'react-router-dom';

function StudentDetails({ students }) {
    const { studentId } = useParams();

    const fakerImage = faker.image.avatarLegacy();

    const student = students.find((student) => student.id === parseInt(studentId));

    if (!student) {
        return (
            <div className="app">
                <h1>Student Details</h1>
                <p>Student not found</p>
                <button className="button">
                    <Link to="/">All Students</Link>
                </button>
            </div>
        );
    }

    const birthdate =
        student.birthdate instanceof Date ? student.birthdate.toLocaleDateString('en-US') : student.birthdate;

    const admission =
        student.admission instanceof Date ? student.admission.toLocaleDateString('en-US') : student.admission;

    return (
        <div className="app">
            <h1>Student Details</h1>
            <section className="student-details">
                <img className="profile-image" src={student.img || fakerImage} alt="Profile Picture" />
                <h2>{student.name}</h2>
                <section className="student-infos">
                    <div className="student-info">
                        <h4>Information</h4>
                        <p>Student ID: {student.id}</p>
                        <p>Date of Birth: {birthdate}</p>
                        <p>Study: {student.study}</p>
                        <p>Admission Date: {admission}</p>
                        <p>Level: {student.level}</p>
                    </div>
                    <div className="student-contact">
                        <h4>Contact</h4>
                        <p>City: {student.city}</p>
                        <p>Address: {student.address}</p>
                        <p>Email: {student.email}</p>
                    </div>
                </section>
            </section>

            <button className="button">
                <Link to="/">All Students</Link>
            </button>
        </div>
    );
}

export default StudentDetails;
