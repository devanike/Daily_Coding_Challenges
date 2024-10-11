const palindrome = userInput =>  {
    // converts the user input to lowercase, filters out the non-alphanumeric characters using regex and joins to form a new string
    const newString = userInput.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char)).join('');

    // splits the newString, reverses the characters and joins to form another variable
    const reversedString = newString.split('').reverse().join('');

    return newString === reversedString;
}

// this function repeatedly asks for user input and checks if it's a palindrome
const palindromeCheck = () => {
    while (true) { 
        const userInput = prompt("Enter text to check if it's a palindrome (or click 'Cancel' to exit):");
        
        // checks if user clicked "Cancel" and breaks out of the loop
        if (!userInput) {
            console.log('Thanks for using the palindrome checker!');
            break;
        }
        
        // checks if the user inputs whitespaces and continues the loop
        if (!userInput.trim()) {
            console.log('Please enter some text!'); 
            continue; 
        }


        console.log(palindrome(userInput) ? `True` : `False`);
    }
};

palindromeCheck();
