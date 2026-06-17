const pokemons = [

{
nome:"Bulbasaur",
numero:"#001",
tipo1:"🌿 Planta",
tipo2:"☠️ Venenoso",
imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
},

{
nome:"Charmander",
numero:"#004",
tipo1:"🔥 Fogo",
tipo2:"",
imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
},

{
nome:"Squirtle",
numero:"#007",
tipo1:"💧 Água",
tipo2:"",
imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
}

];

const cards = document.getElementById("cards");

pokemons.forEach(p => {

cards.innerHTML += `

<div class="card">

<img src="${p.imagem}">

<h2>${p.nome}</h2>

<p>${p.numero}</p>

<p>${p.tipo1}</p>

<p>${p.tipo2}</p>

</div>

`;

});
