var img = document.querySelectorAll(".img img")
var next=document.querySelector(".fa-angle-right")
var back=document.querySelector(".fa-angle-left")
var close=document.querySelector(".background-close")
var background=document.querySelector(".background");
var background_img=document.querySelector(".background_img img");
var heart_effect=document.querySelector(".heart-effect")

var currenIdex=0;
var sum=0;
function open(){
    if(currenIdex==0){
        back.classList.add("none");
    }
    
    else{
        back.classList.remove("none");
       
    }
    if(currenIdex==img.length - 1){
        next.classList.add("none");
    }
    
    else{
       next.classList.remove("none");
       
    }
    background_img.src=img[currenIdex].src
    background.classList.add("open");
}
console.log(sum)
img.forEach((item,index) => {
    item.addEventListener("click",function(){
        heart_effect.classList.remove("none")
        currenIdex=index
        open()
        
    })
})
close.addEventListener("click",function(){
    background.classList.remove("open")
    heart_effect.classList.add("none")
})
document.addEventListener("keydown",function(e){
    if(e.keyCode==27){
        background.classList.remove("open")
        
    }
})
next.addEventListener('click',function(){
    if(currenIdex<img.length -  1){
        currenIdex++;
        open();
    }
})
back.addEventListener('click',function(){
    if(currenIdex>0){
        currenIdex--;
        open();
    }
    
})
