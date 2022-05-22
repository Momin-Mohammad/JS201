
let stuData = JSON.parse(localStorage.getItem("Student_Data"))

stuData.forEach(function(elem,index){

    let main_box = document.getElementById("stuInfo")
    let div = document.createElement("div")

    let name = document.createElement("h2")
    name.innerText = elem.name

    let course = document.createElement("h3")
    course.innerText = elem.course

    let unit = document.createElement("h3")
    unit.innerText = elem.unit

    let image = document.createElement("img")
    image.src = elem.image

    let batch = document.createElement("h3")
    batch.innerText = elem.batch

    let remove = document.createElement("button")
    remove.innerText = "Remove"
    remove.addEventListener("click",function(){
        removeData(index);
    })
    
    
    div.append(name,image,course,unit,batch,remove);
    main_box.append(div);

})

function removeData(index){
    event.target.parentNode.remove();

    let trash = JSON.parse(localStorage.getItem("Trash")) || [];
    trash.push(stuData[index]);
    localStorage.setItem("Trash",JSON.stringify(trash))

    stuData.splice(index,1)
    localStorage.setItem("Student_Data",JSON.stringify(stuData))
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