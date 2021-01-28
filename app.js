const passwordLength = document.getElementById('passwordLength')
const lowercaseCheck = document.getElementById('lowercaseCheck')
const uppercaseCheck = document.getElementById('uppercaseCheck')
const numberCheck = document.getElementById('numberCheck')
const symbolCheck = document.getElementById('symbolCheck')
const excludeInput = document.getElementById('excludeInput')
const resultText = document.getElementById('passwordResult')
const generatePasswordBtn = document.getElementById('generateBtn')

generatePasswordBtn.addEventListener('click', generatePassword)

function getCharCode() {
  const excludeStr = excludeInput.value
  const num = createRandomNumber()
  if (excludeStr.indexOf(getCharacter([num])) > -1) {
    return getCharCode()
  }
  if (lowercaseCheck.checked) {
    if (num >= 97 && num <= 122) {
      return num
    }
  }
  if (uppercaseCheck.checked) {
    if (num >= 65 && num <= 90) {
      return num
    }
  }
  if (numberCheck.checked) {
    if (num >= 48 && num <= 57) {
      return num
    }
  }
  if (symbolCheck.checked) {
    if (
      num >= 33 && num <= 47 ||
      num >= 58 && num <= 64 ||
      num >= 91 && num <= 96 ||
      num >= 123 && num <= 126
    ) {
      return num
    }
  }
  return getCharCode()
}

function createRandomNumber() {
  return Math.floor(Math.random() * 94) + 33
}

function getCharacter(number) {
  return String.fromCharCode(...number)
}

function generatePassword() {
  if (
    !passwordLength.value ||
    Number(passwordLength.value) < 4 ||
    Number(passwordLength.value) > 16
  ) {
    resultText.innerText = 'Password length should between 4 and 16.'
    return
  }

  if (
    !lowercaseCheck.checked &&
    !uppercaseCheck.checked &&
    !numberCheck.checked &&
    !symbolCheck.checked
  ) {
    resultText.innerText = 'You must select at least one character set.'
    return
  }

  const arr = []
  
  for (let i = 0; i <= Number(passwordLength.value); i++) {
    arr.push(getCharCode())
  }

  resultText.innerText = getCharacter(arr)
}
