// import StudentCourse from "./courseReg.mjs"

function Course(courseID, courseTitle, courseName, unit, Advisor, type) {
  this.courseID = courseID;
  this.courseTitle = courseTitle;
  this.courseName = courseName;
  this.unit = unit;
  this.Advisor = Advisor;
  this.type = type;
}

export default Course;
