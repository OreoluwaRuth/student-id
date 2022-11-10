class person {
  constructor(firstName, lastName, gender, age, hobby) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.gender = gender,
      this.age = age,
      this.hobby = hobby
  }
  firstName = "";
  lastName = "";
  gender = "";
  age = "";
  hobby = "";
  walk() {}   
  jump() {
    console.log("i am a girl");
  }
}

let plu = new person("ore","tolu","f","18","music")
console.log(plu)
export default person
