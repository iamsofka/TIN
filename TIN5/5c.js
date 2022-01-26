function Student(firstName, lastName, id, grades)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
}

Student.prototype.course = [];

let student = new Student("Max", "Maxovich", 35, [5, 4, 2, 1, 3]);

let createStudent = (firstName, lastName, id, grades, course) => {
    course = ["BYT","TIN","ZPR"];
    student.course = course;
    return student;
}

console.log(createStudent());