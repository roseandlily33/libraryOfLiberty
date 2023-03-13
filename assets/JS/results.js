let searchBtn= document.getElementById('searchInside');
let backBtn = document.getElementById('back');
let resultsCont = document.getElementById('resultsCont');
let format = document.getElementById('format').value;
let searchingFor = document.getElementById('searchingFor').value;


function search(){
    let libraryURL = 'https://www.loc.gov/'+ format + '?q=' + searchingFor + '&fo=json';
    //let libraryURL = "https://www.loc.gov/collections/world-war-i-sheet-music/?fo=json";
    fetch(libraryURL)
    .then(function(response){
       return response.json();
    })
    .then(function(data){
        console.log(data);
        displaySearch(data);
    })
}
function displaySearch(data){
    resultsCont.textContent = " ";
    if(data.featured_items.length === 0){
        resultsCont.innerHTML = 'No results found';
    }
    for(let i = 0; i < data.featured_items.length; i++){
        let resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv');

        let resultBody = document.createElement('div');
        resultBody.classList.add('divBody');

        let titleEl = document.createElement('h3');
        titleEl.textContent = JSON.stringify(data.featured_items[i].title);

        let imageEl = document.createElement('img');
        imageEl.src = JSON.stringify(data.featured_items[i].image);

        let descEl = document.createElement('h4');

        if(data.featured_items[i].description){
            descEl.textContent = JSON.stringify(data.featured_items[i].description);
        } else {
            descEl.textContent = 'No description';
        }
        resultBody.appendChild(titleEl, descEl, imageEl);
        resultDiv.appendChild(resultBody);
        resultsCont.appendChild(resultDiv);
    }
}

//Search Btn:
searchBtn.addEventListener('click', function(){
    search();
})
//Back Btn:
backBtn.addEventListener('click', function(e){
   // e.preventDefault();
  // document.location.replace('./index.html');

})