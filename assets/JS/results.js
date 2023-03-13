let searchBtn= document.getElementById('searchInside');
let backBtn = document.getElementById('back');
let resultsCont = document.getElementById('resultsCont');



function search(){
    let format = document.getElementById('format').value;
    let searchingFor = document.getElementById('searchingFor').value;

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
    if(data.results.length === 0){
        resultsCont.innerHTML = 'No results found';
    }
    for(let i = 0; i < data.results.length; i++){
        let resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv');

        let resultBody = document.createElement('div');
        resultBody.classList.add('divBody');

        let titleEl = document.createElement('h3');
        titleEl.classList.add('titleEl');
        titleEl.textContent = JSON.stringify(data.results[i].title).slice(1, -1);
        
        
        let dateEl = document.createElement('h3');
        dateEl.classList.add('dateEl');
        dateEl.textContent = JSON.stringify(data.results[i].date).slice(1, -1);

        let subjectEl = document.createElement('h3');
        subjectEl.classList.add('subjectEl');
        subjectEl.textContent = JSON.stringify(data.results[i].partof).slice(1, -1);

        let descEl = document.createElement('h4');
        descEl.classList.add('descEl');
        descEl.textContent = JSON.stringify(data.results[i].description).slice(1, -1);
        
        let readMore = document.createElement('button');
        readMore.textContent = 'Read  More';
        readMore.classList.add('readMoreBtn');
        readMore.src = JSON.stringify(data.results[i].url).slice(1, -1);


        resultBody.appendChild(titleEl);
        resultBody.appendChild(dateEl);
        resultBody.appendChild(subjectEl);
        resultBody.appendChild(descEl);
        resultBody.appendChild(readMore);
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