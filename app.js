const btninput = document.querySelector(".input input");
const addbtn = document.querySelector(".input button");
const list = document.querySelector(".list");
const btnClear = document.querySelector("#clear");
const pending = document.querySelector(".pending");

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
    if(btninput.value==""){
         alert("Plese Enter The task");
    }else{
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
} 

//Funtion for SHowing the task
function showTask(){
    let getLocalStorage = localStorage.getItem("New Task");
    if(getLocalStorage== null){
        listArr =[];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    pending.textContent = listArr.length;
    let newtag = '';
    listArr.forEach((element,index) => {
        newtag += `<li>${element}<span onclick="removeTask(${index})"><i class="fas fa-trash"></i></span></li>`
    });
    list.innerHTML = newtag;
    btninput.value = "";
}
//to removw the task from list
function removeTask(index){
    let getLocalStorage = localStorage.getItem("New Task");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Task",JSON.stringify(listArr));
    showTask();
}

//funtion to clear all the task at a time 
btnClear.onclick = function(){
    listArr =[];
    localStorage.setItem("New Task",JSON.stringify(listArr));
    showTask();

}


