const toDoGoals = document.getElementsByClassName("to-do-goals")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    addItem();
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fa-solid fa-check-double";
    checkIcon.style.color = "black"
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "green";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "black";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.append(trashIcon);

    divParent.appendChild(divChild);

    toDoGoals.appendChild(divParent);

    input.value = '';
}