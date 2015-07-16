/**
 * Solution for Typeform Hiring Challenge 2
 * Author Renārs Vilnis <renars.vilnis@gmail.com>
 *
 * No error validation done, because of the trivial scale of the program
 */

var request = require('request');

var getUrl = 'http://aerial-valor-93012.appspot.com/challenge';

var sumArray = function(arr) {
  var sum = 0;

  arr.forEach(function(val) {
    sum += val * 1;
  });

  return sum;
}

request(getUrl, function(err, res, body) {

  var jsonBody = JSON.parse(body);

  var token = jsonBody.token,
      values = jsonBody.values;

  console.log('Token:', token);
  console.log('Values:', values);
  console.log('Array sum:', sumArray(values));

  // make post request
  var resultUrl = getUrl + '/' + token + '/' + sumArray(values);

  request(resultUrl, function(err, res, resBody) {
    var resJsonBody = JSON.parse(resBody);
    console.log('Answer:', resJsonBody.answer);
  });
});

