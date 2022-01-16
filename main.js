const Toggle = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")

const aside = document.querySelector(".sidebar")


Toggle.addEventListener("click", function(){
    
   //console.log( aside.classList.contains("show-sidebar"))

   aside.classList.toggle("show-sidebar")

}
)


closeBtn.addEventListener("click", function(){
    
    //console.log( aside.classList.contains("show-sidebar"))

    aside.classList.remove("show-sidebar")
 
  
 
 }
 
 )