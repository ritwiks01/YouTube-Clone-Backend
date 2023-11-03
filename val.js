function formvalidator()
{
    let name = document.getElementById('sc').value;
    console.log(name);
    if(name.length > 10) {
        alert('maximum length is 10');
    alert('form validation');
    }
    if(name.length < 3) {
        alert('minimum length is 3');
    alert('form validation');
    
} 


}