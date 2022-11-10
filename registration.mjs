import Academic from "./academic.mjs";

class Studentreg extends Academic{
    constructor(semester,year,studentID,facaulty,department){
        super(year,semester)
        this.facaulty = facaulty,
        this.department = department,
        this.studentID = studentID
    }
    facaulty = "";
    department = ""; 
    studentID = "";
}

export default Studentreg