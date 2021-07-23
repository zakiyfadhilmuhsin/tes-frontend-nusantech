let result = document.getElementById('result');
let inputCheck = [];

// Handle Change Checkbox
function handleChange(name) {
    let getCheckbox = document.getElementById(name);
    if(getCheckbox.checked) {
        inputCheck.push(getCheckbox.value);
    }else{
        const index = inputCheck.indexOf(getCheckbox.value);
        inputCheck.splice(index, 1);
    }
}

// Handle Operator
function operator(type) {
    if( showErrorMessage() ) {
        return;
    }

    let total = [];
    inputCheck.map(item => {
        total.push(document.getElementById(item).value);
    });

    switch (type) {
        case 'addition':
            result.innerText = 'Hasil: ' + total.reduce((total, item) => Number(total) + Number(item));
            break;
        
        case 'subtraction':
            result.innerText = 'Hasil: ' + total.reduce((total, item) => Number(total) - Number(item));
            break;
            
        case 'multiplication':
            result.innerText = 'Hasil: ' + total.reduce((total, item) => Number(total) * Number(item));
            break;

        case 'division':
            result.innerText = 'Hasil: ' + total.reduce((total, item) => Number(total) / Number(item));
            break;
    
        default:
            break;
    }
}

// Handle Error Message
function showErrorMessage() {
    document.getElementById('error-message').style.display = 'none';
    if(inputCheck.length < 2) {
        document.getElementById('error-message').style.display = 'block';
        return true;
    }else{
        return false;
    }
}