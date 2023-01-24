const character_range = document.getElementById('character_range');
const character_number = document.getElementById('character_number');
const gen_form = document.getElementById('generator');
const upper_case = document.getElementById('upper_case');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const password_display = document.getElementById('P_D');

//Ascii codes of uppercase characters
const upper_case_codes = arrayFromLowToHigh(65, 90);
//Ascii codes of lowercase characters
const lower_case_codes = arrayFromLowToHigh(97, 122);
//Ascii codes of numbers
const number_case_codes = arrayFromLowToHigh(48, 57);
//Ascii codes of all symbols available
const symbol_case_codes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

//Sync the read value to latest input value
character_range.addEventListener('input', sync_character);
character_number.addEventListener('input', sync_character);

//On form submit
gen_form.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();
    const char_amount = character_number.value;
    const upper_case_i = upper_case.checked;
    const numbers_i = numbers.checked;
    const symbols_i = symbols.checked;
    //generate password accroding to the rules
    const password = generate_password(char_amount, upper_case_i, numbers_i, symbols_i);
    //update generated password in the password field
    password_display.value = password;
})

//Password generator
function generate_password(char_amount, upper_case_i, numbers_i, symbols_i){
    //Assemble Ascii codes as per the selected rules
    let char_code = lower_case_codes;
    if(upper_case_i) char_code= char_code.concat(upper_case_codes);
    if(numbers_i) char_code = char_code.concat(number_case_codes);
    if(symbols_i) char_code= char_code.concat(symbol_case_codes);

    //Generate characters
    const password_string =[];
    for(let i=0; i<char_amount; ++i){
        const character_code = char_code[Math.floor(Math.random()*char_code.length)];
        password_string.push(String.fromCharCode(character_code));
    };
    //Return generated characters as string
    return password_string.join('');
}

//generate a array of numbers from low to high
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    };
    return array;
}

//Function to Sync the read value to latest input value
function sync_character(e){
    const value = e.target.value;
    character_number.value = value;
    character_range.value = value;
}
