


function appendProduct(){
    let data=JSON.parse(localStorage.getItem("Pro")) ||[]
    let all_products=document.getElementById("all_products")
    all_products.innerHTML=null;

    data.forEach(function(elem,index){
        let box=document.createElement("div")

        let image=document.createElement("img")
        image.src=elem.image

        let type=document.createElement("h2")
        type.innerText=elem.type

        let desc=document.createElement("h4")
        desc.innerText=elem.desc

        let price=document.createElement("h4")
        price.innerText=elem.price

        let btn=document.createElement("button")
        btn.innerText="Remove"
        
        btn.addEventListener("click",function(){
                remove(index)
        })

        box.append(image,type,desc,price,btn)
        all_products.append(box)

    })

}
appendProduct()

function remove(index){
    let data=JSON.parse(localStorage.getItem("Pro")) ||[]

    let NewData=data.filter(function(elem,i){
        if(i===index)
        {
            let reMoveditem =JSON.parse(localStorage.getItem("reMoveditem")) ||[]
            reMoveditem.push(elem);
            localStorage.setItem("reMoveditem" ,JSON.stringify(reMoveditem))
        }
       else{
           return i!==index;
       }

    })

    localStorage.setItem("Pro",JSON.stringify(NewData))
    appendProduct()
}