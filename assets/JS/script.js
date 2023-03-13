let submitForm = document.getElementById('search');

submitForm.addEventListener('click', function(e){
    e.preventDefault();
    let searchingFor = document.getElementById('searchingFor').value;
    let format = document.getElementById('format').value;
    if(!searchingFor){
        window.alert('You must enter a input for search');
        return;
    }  
    location.assign('https://www.loc.gov/'+ format + '?q=' + searchingFor + '&fo=json');
})