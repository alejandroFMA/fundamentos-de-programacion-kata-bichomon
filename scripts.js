console.log(document.title);
document.querySelector("#gen-1").innerHTML="Generasio Pokimon 1";
//  
var backPoke = document.querySelectorAll(".infocard ")
for (let i = 0; i < backPoke.length; i++){
  backPoke[i] = backPoke[i].style.background="red";
}
//
 console.log(document.URL);
// 
console.log(document.domain);
// 
let nodoImg = document.querySelectorAll("img");
console.log(nodoImg)
// 
var changeImg = document.querySelectorAll("img");

 for (let i = 0; i < changeImg.length; i++){

changeImg[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";

}
