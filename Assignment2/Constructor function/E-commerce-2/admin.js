
function Product(name,category,image_url,price,gender,sold){
    this.name = name;
    this.category = category;
    this.url = image_url;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}

let arr = JSON.parse(localStorage.getItem("Products")) || [];

function prodadd(){
    event.preventDefault();
    
    let form = document.querySelector("#product")
    let name = form.name.value;
    let category = form.category.value;
    let image_url = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;
    let sold = form.sold.value;

    let p = new Product (name,category,image_url,price,gender,sold)
    arr.push(p);

    var div = document.createElement("div");
    div.append(p.name,p.category,p.url,)

    localStorage.setItem("Products",JSON.stringify(arr))
    window.location.reload();
}
