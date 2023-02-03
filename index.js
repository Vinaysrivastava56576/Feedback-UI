const mainEl=document.querySelectorAll(".a");

const btnEl=document.getElementById("btn");

const containerE1=document.getElementById("ok")
 
let selectedRating=" ";
mainEl.forEach((element)=>{
    element.addEventListener("click",(event)=> {
        removeActive();
        selectedRating=event.target.innerText || event.target.parentNode.innerText
        console.log(event.target.innerText || event.target.parentNode.innerText);
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })
})

btnEl.addEventListener("click",()=>{
    if(selectedRating !==""){
        containerE1.innerHTML=`
        <strong>Thank You!</strong>
        `
    }
})

function removeActive(){
    mainEl.forEach((a)=>{
        a.classList.remove("active");
    })
}