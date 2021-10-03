var pokemon = [];
const fetchPokemon = async () => {

  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`); 
   var results = await res.json(); 
  
   // console.log(results);
  results.results.map((result) => {
    
    let obj = {
    name: result.name,
   // image: result.sprites['front_default'],
   //     type: result.types.map((type) => type.type.name).join(', '),
   // id: result.id
   };
  
  fetchInnerData(result.url,obj);
  
});
}
catch(err){
  console.error(err);
  // Handle errors here
}  
};
fetchPokemon();
var card = document.createElement("div");
card.className = "container-fluid row";  


const fetchInnerData = async (url, obj) => {
  const res =  await fetch(url); 
  var results = await res.json(); 
 //console.log( 'resulrt',results)
 
    obj['image'] =  results.sprites['front_default'];
    obj['type'] = results.types.map((type) => type.type.name).join(', ');
    obj['id'] = results.id;
    obj['weight'] = results.weight;
    obj['moves'] = results.moves;
    obj['abilities'] = results.abilities;
    pokemon.push(obj);
    console.log('poke',pokemon);
         

  
    
for (var i = 0; i < pokemon.length; i++) 
{

  var table  = `
  <div class="col-sm-3 col-md-6 col-lg-3 col-xl-3 col-xs-12">
  <div class="inner">
    <div class="row">
      <div class="col-md-12">
      <img src="${pokemon[i].image}" class="imgtag">
      </div>
    
      <div class="col-md-12">
        <div class="container">
       
          <p><b>Name</b>:${pokemon[i].name}</p>
          <p><b>Moves</b>:${pokemon[i].moves[0].move.name}</p>
          <p><b>Abilities</b>:${pokemon[i].abilities[0].ability.name}</p>
          <p><b>Weight</b>:${pokemon[i].weight}</p>
        </div>
      </div>
    </div>
    </div>
</div>
`
          
}
card.innerHTML += table;  
document.body.append(card);  

}


