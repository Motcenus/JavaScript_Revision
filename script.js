
// Select one element
const square =document.getElementById("square");
square.onmouseover = function() {
    this.style.backgroundColor = "red";
}
square.onclick = function() {
    this.style.backgroundColor = "green";
}
square.onmouseleave = function() {
    this.style.backgroundColor = "black";
}

//Select multiple elements

const multisquares = document.getElementsByClassName("multiple");
// Using for loop
for(let i=0;i<multisquares.length;i++){
    multisquares[i].onmouseover = function() {
        this.style.backgroundColor = "red";
    }
    multisquares[i].onclick = function() {
        this.style.backgroundColor = "green";
        // this.remove();
    }
    multisquares[i].onmouseleave = function() {
        this.style.backgroundColor = "black";
    }
}

// Add Class To ClassList
const square2 =document.getElementById("square2");
square2.onclick = function(){
    this.classList.remove("square");
    this.classList.add("circle");
}

//Create Element
const createHere =document.getElementById("create-here");
createHere.innerText = "Create Element Here";
createHere.onclick = function() {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square","item");
    // newSquare.classList.add("circle");
    createHere.appendChild(newSquare);
}



let items = document.getElementsByClassName("item");
for(let i=0;i<items.length;i++){
    items[i].onmouseover = function() {
        this.remove();
    }
}
