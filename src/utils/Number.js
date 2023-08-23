export function splitNumberIntoThousands(number) {
  // Convert the number to a string.
  let stringNumber = number.toString();

  // Split the string into an array of characters.
  let characters = stringNumber.split('');

  // Initialize an array to store the thousands separated numbers.
  let thousandsSeparatedNumbers = [];

  // Loop through the characters array.
  for (let i = 0; i < characters.length; i++) {
    // If the current character is not a digit, add a comma to the thousands separated numbers array.
    if (!isNaN(characters[i])) {
      thousandsSeparatedNumbers.push(characters[i]);
    } else if (thousandsSeparatedNumbers.length > 0) {
      // If the current character is a digit and there are already numbers in the thousands separated numbers array, add a comma to the array.
      thousandsSeparatedNumbers.push(',');
    }
  }

  // Return the thousands separated numbers array.
  return thousandsSeparatedNumbers;
}
