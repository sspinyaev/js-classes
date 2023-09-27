function e2() {
    const person = {

 city: "Moscow"

}

const try1 = "city"
const student = Object.create(person);
const a = null

student.ownCity = "Piter";
if(try1 in student) {console.log(true)} else {console.log(false)}
}

e2()