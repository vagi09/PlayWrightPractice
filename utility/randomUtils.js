function getRandomText(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
    for (let i = 0; i < length; i++) {
      randomText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomText;
  }

  function getRandomInt(max = 99999) {
    return Math.floor(Math.random() * (max + 1));  // +1 to include 99999 in the range
  }
  
  module.exports = { getRandomText, getRandomInt };