// Objects destructuring and JSON API

const course = {
    coursename : "JS In Hindi",
    price : "999",
    CourseInstructor : "Hitesh Sir"
}

// console.log(course.CourseInstructor);

// Learning Destructuring == It will help us in React

// const {CourseInstructor} = course
// console.log(CourseInstructor);

const {CourseInstructor: Instructor} = course
console.log(Instructor);

//  API concepts

// JSON 
// In type of Object
// {
//     "name": "Rohit",
//     "coursename": "js in hindi",
//     "courseInstructor": "Hitesh Sir"
// }

// In type of Arrays

// [
//     {},
//     {},
//     {}
// ]

// Randomuser.me we get free api and json formatter tool to beautify