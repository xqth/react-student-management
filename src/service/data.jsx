export const studentData = [
    {
        id: 1,
        img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/321.jpg',
        name: 'Peter Pan',
        birthdate: new Date('1994-01-15'),
        city: 'Hamburg',
        study: 'Computer Science',
        admission: new Date('2012-07-25'),
        level: '6th Grade',
        address: 'Papenhuder Str. 55',
        email: 'peter.pan@gmail.com'
    },
    {
        id: 2,
        img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/567.jpg',
        name: 'Marie Curie',
        birthdate: new Date('1867-07-21'),
        city: 'Paris',
        study: 'Physics',
        admission: new Date('1881-06-10'),
        level: '8th Grade',
        address: '3 rue Joliot Curie',
        email: 'marie-c@gmail.com'
    },
    {
        id: 3,
        img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1246.jpg',
        name: 'Captain Hook',
        birthdate: new Date('1705-05-03'),
        city: 'London',
        study: 'Business Administration',
        admission: new Date('1725-07-25'),
        level: '3th Grade',
        address: '25 Northend Road',
        email: 'hook.captain@yahoo.com'
    }
];

export function generateNewId(students) {
    let maxId = 0;

    students.forEach((student) -> {
        if (student.id > maxId) maxId = student.id;
    });

    return maxId + 1;
}
