import Studentreg from "./registration.mjs";

class StudentCourse extends Studentreg{
    constructor(semester,year,studentID,facaulty,department,courses){
        super(semester,year,studentID,facaulty,department)
        this.courses = courses
    }
    totalCourse(){
        console.log((this.courses).length)
    }
    totalCompulsory(){
        console.log(this.courses.filter(course => course.type === 1).length)
    }
    totalElective(){
        console.log(this.courses.filter(course => course.type === 0).length)
    }
}
export default StudentCourse