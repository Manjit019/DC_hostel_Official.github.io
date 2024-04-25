
//loader component
const loader=document.querySelector(".loader-wrapper");
window.addEventListener("load",()=>{
    setTimeout(function(){
        loader.style.display="none";
    },2000);
})

// Creating a responsive navbar component

const hamburger=document.querySelector(".three-dot");
const headerElem=document.querySelector(".header");

hamburger.addEventListener('click', ()=>{
    headerElem.classList.toggle("active");
})

//scroll to top
const scrolltopBtn=document.getElementById("scroll-top");

window.onscroll=function(){
   if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
    scrolltopBtn.style.bottom="1rem";
   }
   else{
    scrolltopBtn.style.bottom="-2rem";
   }
}
scrolltopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0);
})


//gallery click to download image 
const downloadbtn=document.querySelectorAll('[data-download]');

downloadbtn.forEach(i =>{
    const id=i.dataset.download;
    const image=document.getElementById(id);
    const a=document.createElement("a");

    a.href=image.src;
    a.download="";
    a.style.display="none";

    i.addEventListener('click',()=>{
        // console.log(image.childNodes[1]);
        a.click();
        a.removeChild(a);  
    });
});

