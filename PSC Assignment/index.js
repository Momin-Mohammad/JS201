
function Student(name,course,unit,image,batch){
    this.name = name;
    this.course = course;
    this.unit = `Unit- ${unit}`;
    this.image = image;
    this.batch = `FW-${batch}`;
}
let stuData = JSON.parse(localStorage.getItem("Student_Data"))||[];

function submitData(){
event.preventDefault();

let name = document.querySelector("#name").value;
let course = document.querySelector("#course").value;
let unit = document.querySelector("#unit").value;
let image = document.querySelector("#image").value;
let batch = document.querySelector("#batch").value;

let Student1 = new Student(name,course,unit,image,batch);

stuData.push(Student1);

localStorage.setItem("Student_Data", JSON.stringify(stuData));
   
window.location.reload();

}

// For number of students in each batch
let div = document.querySelector("#stuNums")
var obj = {};
for (var a=0; a<stuData.length; a++)
{
    if(obj[stuData[a].batch] === undefined)
    {obj[stuData[a].batch] = 1;}

    else
    {obj[stuData[a].batch] = obj[stuData[a].batch] + 1;}
}


for (var key in obj)
{
   div.append("|"+ " " +key +" : "+ obj[key] + " " + "|");
}

