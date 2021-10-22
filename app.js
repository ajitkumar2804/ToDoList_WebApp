const btninput = document.querySelector(".input input");
const addbtn = document.querySelector(".input button");
const list = document.querySelector(".list");
const btnClear = document.querySelector("#clear");

//funtion for add button transition 
btninput.onkeyup = function(){
    let user = btninput.value;
    if(user.trim() !=0){
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active");
    }
}
showTask();
 
// add funtion 
addbtn.onclick = function(){
    let user = btninput.value;
    let getLocalStorage = localStorage.getItem("New Task");
    if(getLocalStorage== null){
        listArr =[];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(user);
    localStorage.setItem("New Task",JSON.stringify(listArr));
    showTask();
} 

//Funtion for SHowing the task
function showTask(){
    let getLocalStorage = localStorage.getItem("New Task");
    if(getLocalStorage== null){
        listArr =[];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newtag = '';
    listArr.forEach((element,index) => {
        newtag += `<li>${element}<span><i class="fas fa-trash"></i></span></li>`
    });
    list.innerHTML = newtag;
    btninput.value = "";
}

