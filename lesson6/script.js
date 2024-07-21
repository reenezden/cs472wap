// Exercise 1: String Filter Function
String.prototype.filter = function(bannedWords) {
    return this.split(' ').filter(word => !bannedWords.includes(word)).join(' ');
};
// Example Usage
console.log("This house is not nice!".filter(['not'])); 

// Exercise 2: BubbleSort Algorithm
Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]]; // Swap elements
            }
        }
    }
    return this;
};
// Example Usage
console.log([6, 4, 0, 3, -2, 1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

// Exercise 3: Teacher Object using Function Constructor
function Person(name) {
    this.name = name;
}
Person.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};
// Creating a Teacher object
let teacher = new Person('John');
teacher.teach('Mathematics'); // Output: John is now teaching Mathematics

// Using Object.create
const teacherPrototype = {
    teach: function(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};
function createTeacher(name) {
    let teacher = Object.create(teacherPrototype);
    teacher.name = name;
    return teacher;
}
let anotherTeacher = createTeacher('Jane');
anotherTeacher.teach('Physics'); // Output: Jane is now teaching Physics

// Exercise 4: Using Prototype Approach
const PersonProto = {
    greeting: function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute: function() {
        console.log(`Good morning!, and in case I don't see you, good afternoon, good evening, and good night!`);
    }
};
const StudentProto = Object.create(PersonProto);
StudentProto.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};
const ProfessorProto = Object.create(PersonProto);
ProfessorProto.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};
const createPerson = (name, age) => {
    let person = Object.create(PersonProto);
    person.name = name;
    person.age = age;
    return person;
};
const createStudent = (name, age, major) => {
    let student = Object.create(StudentProto);
    student.name = name;
    student.age = age;
    student.major = major;
    return student;
};
const createProfessor = (name, age, department) => {
    let professor = Object.create(ProfessorProto);
    professor.name = name;
    professor.age = age;
    professor.department = department;
    return professor;
};
// Example Usage
let student = createStudent('Alice', 20, 'Computer Science');
let professor = createProfessor('Dr. Smith', 45, 'Mathematics');
student.greeting();