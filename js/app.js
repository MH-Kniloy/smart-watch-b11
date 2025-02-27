const colorBtn = document.getElementsByClassName("ring-button")
const productImg = document.getElementById("product-image");

for(let i = 0; i < colorBtn.length; i++){
   const singleColorBtn = colorBtn[i]
     const color = singleColorBtn.id.replace("-color", "")
     
   singleColorBtn.addEventListener("click", function (e){
    for(let j = 0; j < colorBtn.length; j++){
        colorBtn[j].classList.remove("border-purple-600")
        colorBtn[j].classList.add("border-gray-300")
        
    }
    e.target.classList.remove("border-gray-300")
    e.target.classList.add("border-purple-600")
    productImg.src = `./images/${color}.png`;
   })
}