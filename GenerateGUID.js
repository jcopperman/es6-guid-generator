/* Generate a random GUID/UUID using ES6 crypto API
 * and return it's value
 */ https://nodejs.org/api/crypto.html#cryptogetrandomvaluestypedarray
 
var crypto = require('crypto');
var getMessage;
var response;

getMessage = function () {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) 
  )
};

response = getMessage();

console.log(response);