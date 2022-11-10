// import teacher from "./teacher.mjs"

// const person = new teacher ("ore","ade","female","18","music","student")
// person.teach()
// // console.log(teacher.lastName);
// // console.log(teacher)

import Course  from "./course.mjs";
import StudentCourse from "./courseReg.mjs";


const course1 = new Course(12,"EEC432","Engineering Bootstrap",2,"Mr. Taiwo",1)
const course2 = new Course(12,"EEC432","Engineering Bootstrap",2,"Mr. Taiwo",0)
const course3 = new Course(12,"EEC432","Engineering Bootstrap",2,"Mr. Taiwo",1)
const course4 = new Course(12,"EEC432","Engineering Bootstrap",2,"Mr. Taiwo",0)
const course5 = new Course(12,"EEC432","Engineering Bootstrap",2,"Mr. Taiwo",1)


let reg = new StudentCourse(1,2022,17087655,"Arts","English Language",[course1,course2,course3,course4,course5])
reg.totalCourse()
reg.totalElective()
reg.totalCompulsory()



// let StudentCourse = new StudentCourse()