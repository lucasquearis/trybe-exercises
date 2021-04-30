let container = document.getElementById("container");
container.style.backgroundColor = "#F0F2F5";

let header = document.querySelectorAll("#header-container")[0];
header.style.backgroundColor = "green";

let emergency = document.querySelectorAll(".emergency-tasks h3");


for(let index = 0; index < emergency.length; index+=1) {
  emergency[index].style.backgroundColor = "purple"
}

let noEmergency = document.querySelectorAll(".no-emergency-tasks h3");


for(let index = 0; index < noEmergency.length; index+=1) {
  noEmergency[index].style.backgroundColor = "black"
}

let urgente = document.querySelectorAll(".urgente");

for(let index = 0; index < urgente.length; index +=1){
  urgente[index].style.backgroundColor = "yellow"
}


let naoUrgente = document.querySelectorAll(".naoUrgente");

for(let index = 0; index < naoUrgente.length; index +=1){
  naoUrgente[index].style.backgroundColor = "orange"
}

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "green";