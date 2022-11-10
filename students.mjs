import person from "./person.mjs"


class student extends person{
    constructor(firstName, lastName, gender, age, hobby,studentID){
        super(firstName, lastName, gender, age, hobby,)
        this.studentID = studentID
    }
    studentID ="";
    
}

export default student
let news = new student("ore","ade","female","18","music","123")
console.log(news)