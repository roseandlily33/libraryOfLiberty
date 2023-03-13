let submitForm = document.getElementById('search');
let readMore = document.getElementsByClassName('readMoreBtn');

submitForm.addEventListener('click', function(e){
    e.preventDefault();

    let format = document.getElementById('format').value;
    let searchingFor = document.getElementById('searchingFor').value;

    if(!searchingFor){
        window.alert('You must enter a input for search');
        return;
    }  
    document.location.assign('assets/results.html');
    console.log(e);

    let libraryURL = 'https://www.loc.gov/'+ format + '?q=' + searchingFor + '&fo=json';

    fetch(libraryURL)
    .then(function(response){
       return response.json();
    })
    .then(function(data){
        console.log(data);
        displaySearch(data);
    }) });


