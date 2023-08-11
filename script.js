const input1 = document.getElementById('input');
const result1 = document.getElementById('result');
const error1 = document.getElementById('error');

let errorTime;
let resultTime;

const updateResult = () =>{
    if (input1.value <= 0 || isNaN(input1.value)) {
        error1.innerText = 'Please enter a valid number';
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            error1.innerText = ''
            input1.value = '';    
        }, 2000)
    } else {
        result1.innerText = (+input1.value / 2.2).toFixed(2)
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            result1.innerText = '';
            input1.value = ''
        }, 10000)
    }
}

input1.addEventListener('input', updateResult)






