document.getElementsByTagName("h1")[0].style.backgroundColor = "skyblue";
document.getElementsByTagName("h1")[0].style.textTransform = "uppercase";
document.getElementsByTagName("h1")[0].style.fontSize = "30px";
document.getElementsByTagName("h1")[0].style.fontFamily = "arial";
document.getElementsByTagName("section")[0].style.fontFamily = "arial";

document.querySelector("h1").innerHTML = "Document Object Model";

document.querySelector("#div1").style.backgroundColor = "lightgreen";
document.querySelector("#div1").style.display = "flex";
document.querySelector("#div1").style.justifyContent = "center";
document.querySelector("#div1").style.alignItems = "center";

document.querySelector("#div2").style.display = "flex";
document.querySelector("#div2").style.backgroundColor = "skyblue";
document.querySelector("#div2").style.color = "orangered";
document.querySelector("#div2").style.justifyContent = "center";
document.querySelector("#div2").style.alignItems = "center";

document.querySelector(".divIn").style.padding = "60px";
document.querySelector(".divIn").style.backgroundColor = "limegreen";
document.querySelector(".divIn").style.borderRadius = "5px";

document.querySelector("section").style.justifyContent = "center";

let divLoop = document.querySelectorAll("div");
for (let i of divLoop) {
  i.style.borderRadius = "5px";
}

document.querySelector("#btn").innerHTML = "<button>Click me</button>";
document.querySelector("#btn").style.margin = "40px 20px";

