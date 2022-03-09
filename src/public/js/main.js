// select the element

const clear = document.querySelector(".clear")
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")

// classes name

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"

//varibles
let LIST, id;

// get item from localstorage

let data =localStorage.getItem("TODO");
//check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); //load the list to the user interface
}else{
    LIST = [];
    id = 0;
    //if data isn't empty
}

//load items to the user's interface

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash)
    });
}

//clear the local storage

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})


//show todays date
const options = { weekday:"long", month: "short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options)

//add to do funcion

function addToDo(toDo , id, done, trash){
  
    if(trash){return; }

    const DONE = done? CHECK : UNCHECK;
    const LINE = done? LINE_THROUGH: "";

    const item = ` <li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">  ${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
    </li> `;


 const position = "beforeend"   
 list.insertAdjacentHTML(position, item)

}

// add a item to the list whenever user enter the enter key

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;

        //if input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
             LIST.push({
                 name: toDo,
                 id:    id,
                 done: false,
                 trash: false
             });
             //add item to localstorage(this code must be everywhere when we update our list)

             localStorage.setItem("TODO", JSON.stringify(LIST));

             id++
        }
        input.value = " "
    }
})

//complate to do
 function completeToDo (element){
     element.classList.toggle(CHECK);
     element.classList.toggle(UNCHECK);
     element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

     LIST[element.id].done = LIST[element.id].done ? false:true;
 }

 //removeToDo 

 function removeToDo(element){
     element.parentNode.parentNode.removeChild(element.parentNode);

     LIST[element.id].trash = true;
 }

 // target the created dynamically

 list.addEventListener("click", function(event){
   const element = event.target; // return the clicked element inside list
   const elementJob = element.attributes.job.value; // complate or delete

   if(elementJob == "complete"){
      completeToDo(element)
   }else if(elementJob == "delete"){
    removeToDo(element);
   }
   //add item to localstorage(this code must be everywhere when we update our list)
    localStorage.setItem("TODO", JSON.stringify(LIST));
 })



