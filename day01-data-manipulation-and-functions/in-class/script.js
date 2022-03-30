// var fahrenheitToCelsiusMain = function (input) {
//   // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
//   var myOutputValue = "hello kimmi";
//   myOutputValue = "hello";
//   return myOutputValue;
// };

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (tripLengthInMiles) {
  // Some code that calculates total fuel cost
  var litresNeeded = tripLengthInMiles / 9;
  var fuelCost = litresNeeded * 2.2;
  return fuelCost;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var inputInMiles = convertKmToMiles(input);
  var myOutputValue = calculateTotalFuelCost(inputInMiles);
  return myOutputValue;
};

// var roadTripCostComfortableMain = function (input) {
//   // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var iceMachineMain = function (input) {
//   // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var beerOrderMain = function (input) {
//   // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var cellularDataMain = function (input) {
//   // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };
