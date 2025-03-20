// Array of 10 students
let students = [
    { regNo: '2021/ict/126', name: 'ish', age: 25, course: 'IT', gender: 'Female', gpa: 3.4 },
    { regNo: '2021/ict/109', name: 'izz', age: 24, course: 'IT', gender: 'Male', gpa: 2.8 },
    { regNo: '2021/ict/113', name: 'sula', age: 23, course: 'IT', gender: 'Female', gpa: 3.6 },
    { regNo: '2021/ict/037', name: 'haff', age: 24, course: 'IT', gender: 'Male', gpa: 3.0 },
    { regNo: '2021/ict/054', name: 'nuha', age: 22, course: 'ICT', gender: 'Female', gpa: 3.9 },
    { regNo: '2021/ict/081', name: 'zah', age: 23, course: 'CS', gender: 'Male', gpa: 2.5 },
    { regNo: '2021/ict/092', name: 'ail', age: 24, course: 'IT', gender: 'Female', gpa: 3.7 },
    { regNo: '2021/ict/103', name: 'ilana', age: 25, course: 'CS', gender: 'Male', gpa: 2.9 },
    { regNo: '2021/ict/117', name: 'fas', age: 22, course: 'IT', gender: 'Female', gpa: 3.8 },
    { regNo: '2021/ict/130', name: 'jam', age: 26, course: 'ICT', gender: 'Male', gpa: 3.2 }
];

// Find female students
let femaleStudents = students.filter(student => student.gender === 'Female');
console.log("Female Students:", femaleStudents);

// Find students following the IT course
let itStudents = students.filter(student => student.course === 'IT');
console.log("Students following IT course:", itStudents);

// Find the maximum GPA
let maxGPA = Math.max(...students.map(student => student.gpa));
console.log("Maximum GPA:", maxGPA);

// Find the average GPA
let avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;
console.log("Average GPA:", avgGPA.toFixed(2));
