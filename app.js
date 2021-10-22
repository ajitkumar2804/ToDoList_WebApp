const btninput = document.querySelector(".input input");
const addbtn = document.querySelector(".input button");


//funtion for add button transition 
btninput.onkeyup = function(){
    let user = btninput.value;
    if(user.trim() !=0){
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active");
    }
}
 