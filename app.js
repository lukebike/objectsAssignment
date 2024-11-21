// 1.
let teknikHogSkolan = {
  name: "teknikhögskolan",
  address: "skolgatan",
  zipcode: "lund",
  students: [],
  teachers: [],
};
// 2.
let matematik = {
  matematik: "matematik",
  students: [],
  teachers: [],
};
let programmering = {
  programmering: "programmering",
  students: [],
  teachers: [],
};
let hemkunskap = {
  hemkunskap: "hemkunskap",
  students: [],
  teachers: [],
  joe: "joe",
  luke: "luke",
  moe: "moe",
  jane: "jane",
  daniel: "daniel",
};
// 3.
let luke = {
  name: "luke",
  age: 20,
  gender: "male",
  subjects: [],
};
let rahim = {
  name: "rahim",
  age: 23,
  gender: "male",
  subjects: [],
};
let khaled = {
  name: "khaled",
  age: 30,
  gender: "male",
  subjects: [],
};
let isak = {
  name: "isak",
  age: 34,
  gender: "male",
  subjects: [],
};
let isabella = {
  name: "isabella",
  age: 22,
  gender: "female",
  subjects: [],
};
// 4.
let niklas = {
  name: "niklas",
  subjects: [],
};
let daniel = {
  name: "daniel",
  subjects: [],
};
// 5. Datan kan vara viktig för att hålla koll på vilka lärare som har vilka ämnen ur ett admins perspektiv. Just nu saknas eleverna som ska ha ämnena.
niklas.subjects.push(matematik);
console.log(niklas);
console.log(niklas.subjects[0]);
// 6.
matematik.students.push(luke);
console.log(matematik);
// 7.
const addSubjectToTeacher = (subject, teacher) => {
  teacher.subjects.push(subject);
};
addSubjectToTeacher(hemkunskap, niklas);
console.log(niklas);
// 8.  Anledningen till att ha en fristående funktion är att kunna använda det när som helst för flera objekt.
// 9.
const addSubjectToStudent = (subject, student) => {
  student.subjects.push(subject);
};
const enlistStudent = (subject, ...student) => {
  subject.students.push(student);
};
// 10.
enlistStudent(programmering, luke);
console.log(programmering);
addSubjectToStudent(programmering, isabella);
console.log(isabella);
// 11.
addSubjectToStudent(hemkunskap, luke);
console.log(luke);
const removeSubject = (subject, student) => {
  student.subjects.pop(subject);
};
// 12.
removeSubject(hemkunskap, luke);
console.log(luke);
// 13.
enlistStudent(matematik, luke, rahim, isak, isabella, khaled);
console.log(matematik);
// 14.
const showStudents = (subject) => {
  for (student in subject) {
    console.log(subject["students"]);
  }
};
console.log(showStudents(matematik));
// 15.
// 16.
