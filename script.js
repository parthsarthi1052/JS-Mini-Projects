
let out=document.getElementById("output");
function react(){
    let inputValue=document.getElementById("inputElement").value;
    let num=Math.ceil(Math.random()*100);
if(inputValue==num){
    out.textContent="Congratulations,You got it right!"
}else if(num>inputValue){
    out.textContent="Too low,Try again!"
}else if(num<inputValue){
    out.textContent="Too high,Try again!"
}else{
    out.textContent="Please enter a valid input!"
}
}