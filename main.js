const item1 = document.querySelector(".item-clf-1")
const item2 = document.querySelector(".item-clf-2")
const item3 = document.querySelector(".item-clf-3")
const item4 = document.querySelector(".item-clf-4")
const item5 = document.querySelector(".item-clf-5")

const ctn1 = document.querySelector(".container")
const ctn2 = document.querySelector(".container-2")

var star = document.querySelector(".value-star")

item1.addEventListener("click", function(){
    item1.classList.add("select")
    item2.classList.remove("select")
    item3.classList.remove("select")
    item4.classList.remove("select")
    item5.classList.remove("select")

    
})
item2.addEventListener("click", function(){
    item1.classList.remove("select")
    item2.classList.add("select")
    item3.classList.remove("select")
    item4.classList.remove("select")
    item5.classList.remove("select")

   
})
item3.addEventListener("click", function(){
    item1.classList.remove("select")
    item2.classList.remove("select")
    item3.classList.add("select")
    item4.classList.remove("select")
    item5.classList.remove("select")

    
})
item4.addEventListener("click", function(){
    item1.classList.remove("select")
    item2.classList.remove("select")
    item3.classList.remove("select")
    item4.classList.add("select")
    item5.classList.remove("select")

    
})
item5.addEventListener("click", function(){
    item1.classList.remove("select")
    item2.classList.remove("select")
    item3.classList.remove("select")
    item4.classList.remove("select")
    item5.classList.add("select")

    
})
function Submit(){
    if(item1.classList.contains("select")){
        ctn2.classList.add("show")
        ctn1.classList.add("off")
        star.innerHTML = "1"

    }else if(item2.classList.contains("select")){
        ctn2.classList.add("show")
        ctn1.classList.add("off")
        star.innerHTML = "2"

    }else if(item3.classList.contains("select")){
        ctn2.classList.add("show")
        ctn1.classList.add("off")
        star.innerHTML = "3"

    }else if(item4.classList.contains("select")){
        ctn2.classList.add("show")
        ctn1.classList.add("off")
        star.innerHTML = "4"

    }else if(item5.classList.contains("select")){
        ctn2.classList.add("show")
        ctn1.classList.add("off")
        star.innerHTML = "5"
    }
}