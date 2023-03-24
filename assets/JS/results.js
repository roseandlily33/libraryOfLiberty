let searchBtn= document.getElementById('searchInside');
let backBtn = document.getElementById('back');
let resultsCont = document.getElementById('resultsCont');
let submitBtn = document.getElementById('searchOutside');

function search(){
    let format = document.getElementById('format').value;
    let searchingFor = document.getElementById('searchingFor').value;
     libraryURL = 'https://www.loc.gov/'+ format + '?q=' + searchingFor + '&fo=json';
     fetchData(libraryURL);
}
function fetchData(url){
     fetch(url)
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
       // console.log(data.results[i]);
        let resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv');

        let resultBody = document.createElement('div');
        resultBody.classList.add('divBody');
       
        let titleEl = document.createElement('h3');
        titleEl.classList.add('titleEl');
        titleEl.textContent = data.results[i].title;
       
        
        let dateEl = document.createElement('h3');
        dateEl.classList.add('dateEl');
        dateEl.textContent = data.results[i].date;

        let subjectEl = document.createElement('h3');
        subjectEl.classList.add('subjectEl');
        subjectEl.textContent = data.results[i].partof;
        

        let descEl = document.createElement('h4');
        descEl.classList.add('descEl');
        descEl.textContent = data.results[i]
        descEl.textContent = data.results[i].description;
        
        let readMore = document.createElement('a');
        readMore.textContent = 'Read More';
        readMore.classList.add('readMoreBtn');
        readMore.setAttribute('href', data.results[i].url);

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
  document.location.replace('../index.html');
})
submitBtn.addEventListener('click', function(){
    document.location.assign('assets/results.html');
    libraryUrl = ('https://www.loc.gov/'+ format + '?q=' + searchingFor + '&fo=json');
    search();
})

