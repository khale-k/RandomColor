let btn=document.querySelector("button");

function random(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");

    let color=random();
    h3.innerText=color;
    let div=document.querySelector(".box2");
    div.style.backgroundColor=color;
})