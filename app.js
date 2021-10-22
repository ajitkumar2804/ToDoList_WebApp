const btninput = document.querySelector(".input input");
const addbtn = document.querySelector(".input button");

btninput.onkeyup = function(){
    let user = btninput.value;
    if(user.trim() !=0){
        addbtn.classList.add("active");
    }
}
 