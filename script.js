async function buscarInfos(){
    const response = await fetch('https://rickandmortyapi.com/api/character/40');
    const data = await response.json();
    console.log(data);
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('id').innerHTML = data.id;
    document.getElementById('gender').innerHTML = data.gender;
    document.getElementById('species').innerHTML = data.species;
}
buscarInfos();

