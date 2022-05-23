//store the products array in localstorage as "products"

function ProDuct(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;

}



function myfunction(event){
    event.preventDefault();

    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;


let s1 =new  ProDuct(type,desc,price,image)

//console.log(s1)
let data=JSON.parse(localStorage.getItem("Pro")) ||[]

data.push(s1)

localStorage.setItem("Pro",JSON.stringify(data))
window.location.reload()


}