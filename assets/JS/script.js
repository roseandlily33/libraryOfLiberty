let submitForm = document.getElementById('searchBtn');

submitForm.addEventListener('click', function(e){
    e.preventDefault();

    let format = document.getElementById('format').value;
    let searchingFor = document.getElementById('searchingFor').value;

    if(!searchingFor){
        window.alert('You must enter a input for search');
        return;
    }  
    document.location.assign('assets/results.html');
    libraryUrl = ('https://www.loc.gov/'+ format + '?q=' + searchingFor + '&fo=json');
    }) 


