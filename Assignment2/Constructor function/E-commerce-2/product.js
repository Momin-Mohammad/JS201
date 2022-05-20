
let prods = JSON.parse(localStorage.getItem("Products")) || [];
let main_box = document.querySelector(".prods");


prods.forEach(function(elem,index) {
    
    let box = document.createElement("div");
    box.setAttribute("class", "product")

    let name = document.createElement("h2");
    name.innerText = elem.name;

    let category = document.createElement("h3");
    category.innerText = elem.category;

    let image = document.createElement("img")
    image.setAttribute("src", elem.url)

    let price = document.createElement("h2");
    price.innerText = `₹ ${elem.price}`;

    let gender = document.createElement("h3");
    gender.innerText = elem.gender;

    // Remove button
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.setAttribute("id","remove")

    remove.addEventListener("click", function(){
        removeItem(elem,index);
    })

    // Sold button
    let sold = document.createElement("button");
    sold.innerText = "Sold";
    sold.setAttribute("id","sold")
    if(elem.sold === "true")
    {sold.style.backgroundColor = "red"}
    else
    {sold.style.backgroundColor = "green"}

    sold.addEventListener("click", function(){
        toggleValue(elem);
    })

    box.append(name,category,image,price,gender,remove,sold);
    main_box.append(box);
});

let counter = document.querySelector("#counter");
   if(prods.length < 1)
    {counter.innerText = "Total products : 0";}
    else
    {counter.innerText = `Total products : ${prods.length}`;}

    function toggleValue(elem){
      if(elem.sold === "false")
      {elem.sold = "true"
      localStorage.setItem("Products",JSON.stringify(prods));
       window.location.reload();}

      else if(elem.sold === "true")
      {elem.sold = "false"
      localStorage.setItem("Products",JSON.stringify(prods));
      window.location.reload();}

      
    }
// For removing items***************
function removeItem(index){
   event.target.parentNode.remove();

   prods.splice(index,1)
   localStorage.setItem("Products",JSON.stringify(prods));
   window.location.reload();
}