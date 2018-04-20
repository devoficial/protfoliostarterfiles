const Abutton = document.querySelector("#abut");
const Aimg = document.querySelector("#anim");
const bg = document.querySelector(".bg-grad");
// const head = document.querySelector(".display-1");
const  div = document.querySelectorAll(".card");

 for(let i= 0; i < div.length; i+=1){
            div[i].addEventListener("mouseover",()=>{
                div[i].classList.add("cardplay");
            })
            div[i].addEventListener("mouseout",()=>{
                div[i].classList.remove("cardplay");
            })
}


Abutton.addEventListener("mouseover", (e)=>{
            // head.classList.add("change");
            Aimg.classList.add("hover");
            bg.classList.add("body-back");
})

// fadding the content
