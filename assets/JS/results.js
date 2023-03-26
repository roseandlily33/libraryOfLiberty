let searchBtn= document.getElementById('searchInside');
let backBtn = document.getElementById('back');
let resultsCont = document.getElementById('resultsCont');
let submitBtn = document.getElementById('searchOutside');

function search(){
    let format = document.getElementById('formatInside').value;
    let searchingFor = document.getElementById('inputInside').value;
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
        descEl.textContent = data.results[i];
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
//Search Btn on inner HTML:
searchBtn.addEventListener('click', function(){
    console.log('inner button');
    search();
    console.log('inner btn 2');
})
//Back Btn on inner HTML:
//backBtn.addEventListener('click', function(){
 // document.location.replace('../index.html');
//})
//Search Btn on outer HTML:
//submitBtn.addEventListener('click', function(e){
  //  e.preventDefault();
   // console.log('Outer btn');
    //let formatOut = document.getElementById('formatOutside').value;
    //let searchOut = document.getElementById('inputOutside').value;
   // document.location.assign('assets/results.html');
 //   document.location.replace('/assets/results.html');
   // console.log('after document')
    //let libraryUrl = ('https://www.loc.gov/'+ formatOut + '?q=' + searchOut + '&fo=json');
    //console.log('after set url')
   // fetchData(libraryUrl);
    //console.log('after fetch')
//})

