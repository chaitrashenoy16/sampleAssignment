const submitForm = () =>
{
    var firstName;
    firstName =  document.getElementById('firstname').value;
    var lastName;
    lastName = document.getElementById('lastname').value;
    console.log('First name is: ' +firstName);
    console.log('Last name is: ' +lastName);
    alert('Name is: ' +firstName + ' ' +lastName)
}