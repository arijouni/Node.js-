// Import the generate-password module
const generatePassword = require("generate-password");
// Function to generate a random password
function generateRandomPassword() {
  // Define password options
  const passwordOptions = {
    length: 12, // Length of the password
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    excludeSimilarCharacters: true, // Exclude similar characters like 'i' and 'l'
  };

  // Generate the password
  const password = generatePassword.generate(passwordOptions);
  return password;
}

// Generate a password and log it to the console
const password = generateRandomPassword();
console.log("Generated Password:", password);
