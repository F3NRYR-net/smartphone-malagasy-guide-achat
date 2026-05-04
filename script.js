const smartphones = [
{nom:"Redmi Note 11",marque:"Xiaomi",prix:"moyen",ram:4,batterie:5000,note:4.3,lien:"https://www.mi.com"},
{nom:"Galaxy A14",marque:"Samsung",prix:"moyen",ram:4,batterie:5000,note:4.2,lien:"https://www.samsung.com"},
{nom:"iPhone 13",marque:"Apple",prix:"premium",ram:6,batterie:3200,note:4.8,lien:"https://www.apple.com"},
{nom:"Pixel 6",marque:"Google",prix:"premium",ram:8,batterie:4600,note:4.7,lien:"https://store.google.com"},
{nom:"Moto G Power",marque:"Motorola",prix:"petit",ram:4,batterie:5000,note:4.1,lien:"https://www.motorola.com"}
];

// affichage
function afficher(liste){
let html="";
liste.forEach(t=>{
html+=`
<div class="card">
<h3>${t.nom}</h3>
<p>${t.marque}</p>
<p>RAM: ${t.ram}GB</p>
<p>Batterie: ${t.batterie}</p>
<p>⭐ ${t.note}</p>
<button onclick="window.open('${t.lien}')">Officiel</button>
<button onclick="avis('${t.nom}')">Avis</button>
</div>`;
});
document.getElementById("liste").innerHTML=html;
}

// filtre
function filtrer(){
let prix=document.getElementById("prix").value;
let ram=document.getElementById("ram").value;
let batterie=document.getElementById("batterie").value;

let res=smartphones.filter(t=>
(prix==="all"||t.prix===prix) &&
(ram==="all"||t.ram>=ram) &&
(batterie==="all"||t.batterie>=batterie)
);

afficher(res);
}

// avis
function avis(nom){
let a=prompt("Ton avis ?");
if(a) alert("Merci !");
}

// achat
function acheter(){
window.location.href="https://paypal.com";
}

// dark mode
const toggle=document.getElementById("themeToggle");

if(toggle){
toggle.addEventListener("change",()=>{
document.body.classList.toggle("dark-mode");
});
}

// load
window.onload=()=>afficher(smartphones);
