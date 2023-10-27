import '../assets/css/App.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import { faker } from '@faker-js/faker';
import { genNewId } from '../service/data';

const initialState = {
    id: 0,
    name: '',
    birthdate: '',
    city: '',
    address: '',
    email: '',
    study: '',
    admission: '',
    level: ''
};

const allowedSubjects = ['Math', 'Computer Science', 'History', 'Art', 'English', 'Physics', 'Business Administration'];

function StudentForm({ addStudent, students }) {
    const [formStudent, setFormStudent] = useState({ ...initialState });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormStudent((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value,
            id: genNewId(students)
        }));
    };

    const handleAddStudent = (e) => {
        e.preventDefault();
        if formStudent.name.length < 5 || formStudent.name.length > 20) {
            alert('Name must be from 5-20 characters!');
            return;
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formStudent.email)) {
            alert('This email is invalid!');
            return;
        }
        if (students.find((student) => student.email === formStudent.email)) {
            alert('This email already exist!');
            return;
        }
        if (allowedSubjects.includes(formStudent.study)) {
            alert('Study subject is not allowed!');
            return;
        }
        addStudent({ ...formStudent, img: faker.image.avatarLegacy() });
        setFormStudent({ ...initialState });
        navigate(`/`);
    };

    return (
        <form className="form" onSubmit={(e) => handleAddStudent(e)}>
            <div>
                <Input
                    name="name"
                    label="Name"
                    value={formStudent.name}
                    placeholder="Justin Bieber"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="birthdate"
                    label="Date of Birth"
                    value={formStudent.birthdate}
                    placeholder="01/03/1994"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="city"
                    label="City"
                    value={formStudent.city}
                    placeholder="London"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="address"
                    label="Address"
                    value={formStudent.address}
                    placeholder="268 Grosvenor St"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="email"
                    label="Email"
                    value={formStudent.email}
                    placeholder="justinbb@gmail.com"
                    type="email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="study"
                    label="Study"
                    value={formStudent.study}
                    placeholder="Art"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="admission"
                    label="Admission Date"
                    value={formStudent.admission}
                    placeholder="12/05/2005"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    name="level"
                    label="Level"
                    value={formStudent.level}
                    placeholder="7th Grade"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="button-group">
                <button className="form-button" type="submit">
                    Add Student
                </button>
                <button className="form-button">
                    <Link to="/">All Students</Link>
                </button>
            </div>
        </form>
    );
}

export default StudentForm;
