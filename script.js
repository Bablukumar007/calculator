let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (b) => {
        let value = b.target.innerText;

        if (value === '=') {
            try {
                string = eval(string).toString();
                inputBox.value = string;
            } catch (err) {
                inputBox.value = "Error";
                string = '';
            }
        } else if (value === 'AC') {
            string = '';
            inputBox.value = '0';
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string || '0';
        } else if (b.target.id === 'plusMinus') {
            try {
                if (string) {
                    string = (-1 * eval(string)).toString();
                    inputBox.value = string;
                }
            } catch (err) {
                inputBox.value = "Error";
                string = '';
            }
        } else {
            if (string === '0' || inputBox.value === '0') {
                string = '';
            }
            string += value;
            inputBox.value = string;
        }
    });
});
