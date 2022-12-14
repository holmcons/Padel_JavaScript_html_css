//Validation for input

const form = document.getElementById('form');
const name = document.getElementById('namn');
const medId = document.getElementById('medid');
const date = document.getElementById('datum');
const bana = document.querySelector('input[name="bana"]:checked');

console.log(bana)
console.log(typeof bana)

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});
// If nameValue == ''. This function goes
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
//If nameValue input success
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// If medidValue == ''. This function goes
const setError2 = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
//If medidValue input success
const setSuccess2 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// If dateValue == ''. This function goes
const setError3 = (element, message) =>{ 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
//If dateValue input success
const setSuccess3 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// If bana === false. This function goes
const setError4 = (element, message) =>{ 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
//If dateValue input success
const setSuccess4 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const nameValue = name.value.trim();
    const medidValue = medId.value.trim();
    const dateValue = date.value.trim();

    if (nameValue === '') {
        setError(name, 'Fyll i ditt fullst??ndiga f??r- och efternamn');
    } else
        setSuccess(name);

    if(medidValue === ''){
        setError2(medId, 'Fyll i ditt medlemsnummer');
    } else
        setSuccess2(medId);

    if (dateValue === ''){
        setError3(date, 'Fyll i datum');
    } else
        setSuccess3(date);

    if (bana == null){
        setError4(bana, 'V??lj en bana');
    } else
        setSuccess4(bana);
};
//end validation for input

//Validation for input type="radio"

