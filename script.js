let allBtn= document.querySelectorAll(".btn");
SetBasket();

//let arr=[];
allBtn.forEach(btn=>{
    btn.onclick=function(e){
        e.preventDefault()
        let id=btn.parentElement.parentElement.getAttribute("data-id")
        SetBasket();
        let localStorageArr=JSON.parse(localStorage.getItem("basket"))
        let existProduct=localStorageArr.find(x=>x.id==id)
        if (existProduct===undefined) {
            localStorageArr.push({
                id:id,
                name:this.parentElement.firstElementChild.innerText,
                count:1,
                price:this.previousElementSibling.innerText,
                src:this.parentElement.parentElement.firstElementChild.getAttribute("src")
            })
        }
        else{
            existProduct.count+=1;
            existProduct.price*=existProduct;
        }
        localStorage.setItem("basket",JSON.stringify(localStorageArr));
        GetBasketCount();
    }

})

function GetBasketCount(){
    let localStorageArr=JSON.parse(localStorage.getItem("basket"));
    document.getElementById("basketCount").innerText=localStorageArr.length; 

}
GetBasketCount();
function SetBasket(params) {
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket",JSON.stringify([]))
    }
}