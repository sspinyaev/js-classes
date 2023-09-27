function(){
	const person = {

 city: "Moscow"

}


const student = Object.create(person);


student.ownCity = "Piter";


console.log(student.city); 

for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key, student[key]); 
    }   
}
}