//convert a string to a date
function ConvertDate(string)
{
  var re = /[0-9]+/g;
  var result = re [Symbol.match](string);
  var dateLoc = new Date(result[0], result[1], result[2]);
  return dateLoc;
}

/*function getDays (beginDate, returnDate)
{
  var begin = convertDate(beginDate).getTime(); //renvoie en ms
  var end = convertDate(returnDate).getTime();
  return Math.floor((end-begin) / 86400000) + 1; //déclarer la var MS_PER_DAYS
}
*/
function PayLess(numberOfDay)
{
  if (0<numberOfDay<=3)
  {
    pricePerDay *= 0.9;
  }
  else if (3<numberOfDay<=9)
  {
    pricePerDay *= 0.7;
  }
  else if (9<numberOfDay)
  {
    pricePerDay *= 0.5;
  }
  return pricePerDay;
}


 //parcourir la liste rentals puis pick date et ensuite return date et convert date
function RentalPrices(carId)
{
  return
  {
    for (var i = 0; i<rentals.length; i++)
    {
      var Time = convertDate(rentals[i].returnDate).getTime()-convertDate(rentals[i].pickupDate).getTime();
      var numberOfDay = (Time / 86400000) + 1;
      for (var j = 0; j<cars.length; j++)
      {
        if (rentals[i].carId == cars[j].id)
        {
          var newPrice = PayLess(numberOfDay);
          var timeComponent = numberOfDay * cars[j].newPrice;
          var distanceComponent = rentals[i].distance * cars[j].pricePerKm;
          rentals[i].price = timeComponent + distanceComponent;
        }
        rentals[i].commission = rentals[i].price*0.3;
        rentals[i].insurance = commission*0.5;
        rentals[i].assistance = numberOfDay;
        rentals[i].drivy = commission - insurance - assistance;
        console.log(rentals[i].commission);
        console.log(rentals[i].insurance);
        console.log(rentals[i].assistance);
        console.log(rentals[i].drivy);
        if (rentals[i].deductibleReduction == 'true')
        {
          rentals[i].price = rentals[i].price + 4*numberOfDay;  
        }
        console.log (rentals[i].price);
        actors[i].debit = rentals[i].price;
        actors[i].owner = rentals[i].price - rentals[i].comission;
        actors[i].insurance = rentals[i].insurance;
        actors[i].assistance = rentals[i].assistance;
        actors[i].drivy = rentals[i].drivy;
        console.log(actors[i].debit);
        console.log(actors[i].owner);
        console.log(actors[i].insurance);
        console.log(actors[i].assistance);
        console.log( actors[i].drivy);
      }
    }
  }
}




'use strict'; 
 
//list of cars 
//useful for ALL exercises 
var cars = [{ 
  'id': 'p306', 
  'vehicule': 'peugeot 306', 
  'pricePerDay': 20, 
  'pricePerKm': 0.10 
}, { 
  'id': 'rr-sport', 
  'pricePerDay': 60, 
  'pricePerKm': 0.30 
}, { 
  'id': 'p-boxster', 
  'pricePerDay': 100, 
  'pricePerKm': 0.45 
}]; 
 
//list of rentals 
//useful for ALL exercises 
//The `price` is updated from exercice 1 
//The `commission` is updated from exercice 3 
//The `options` is useful from exercice 4 
var rentals = [{ 
  'id': '1-pb-92', 
  'driver': { 
    'firstName': 'Paul', 
    'lastName': 'Bismuth' 
  }, 
  'carId': 'p306', 
  'pickupDate': '2016-01-02', 
  'returnDate': '2016-01-02', 
  'distance': 100, 
  'options': { 
    'deductibleReduction': false 
  }, 
  'price': 0, 
  'commission': { 
    'insurance': 0, 
    'assistance': 0, 
    'drivy': 0 
  } 
}, { 
  'id': '2-rs-92', 
  'driver': { 
    'firstName': 'Rebecca', 
    'lastName': 'Solanas' 
  }, 
  'carId': 'rr-sport', 
  'pickupDate': '2016-01-05', 
  'returnDate': '2016-01-09', 
  'distance': 300, 
  'options': { 
    'deductibleReduction': true 
  }, 
  'price': 0, 
  'commission': { 
    'insurance': 0, 
    'assistance': 0, 
    'drivy': 0 
  } 
}, { 
  'id': '3-sa-92', 
  'driver': { 
    'firstName': ' Sami', 
    'lastName': 'Ameziane' 
  }, 
  'carId': 'p-boxster', 
  'pickupDate': '2015-12-01', 
  'returnDate': '2015-12-15', 
  'distance': 1000, 
  'options': { 
    'deductibleReduction': true 
  }, 
  'price': 0, 
  'commission': { 
    'insurance': 0, 
    'assistance': 0, 
    'drivy': 0 
  } 
}]; 
 
//list of actors for payment 
//useful from exercise 5 
var actors = [{ 
  'rentalId': '1-pb-92', 
  'payment': [{ 
    'who': 'driver', 
    'type': 'debit', 
    'amount': 0 
  }, { 
    'who': 'owner', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'insurance', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'assistance', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'drivy', 
    'type': 'credit', 
    'amount': 0 
  }] 
}, { 
  'rentalId': '2-rs-92', 
  'payment': [{ 
    'who': 'driver', 
    'type': 'debit', 
    'amount': 0 
  }, { 
    'who': 'owner', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'insurance', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'assistance', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'drivy', 
    'type': 'credit', 
    'amount': 0 
  }] 
}, { 
  'rentalId': '3-sa-92', 
  'payment': [{ 
    'who': 'driver', 
    'type': 'debit', 
    'amount': 0 
  }, { 
    'who': 'owner', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'insurance', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'assistance', 
    'type': 'credit', 
    'amount': 0 
  }, { 
    'who': 'drivy', 
    'type': 'credit', 
    'amount': 0 
  }] 
}]; 
 
//list of rental modifcation 
//useful for exercise 6 
var rentalModifications = [{ 
  'rentalId': '1-pb-92', 
  'returnDate': '2016-01-04', 
  'distance': 150 
}, { 
  'rentalId': '3-sa-92', 
  'pickupDate': '2015-12-05' 
}]; 
 
console.log(cars); 
console.log(rentals); 
console.log(actors); 
console.log(rentalModifications); 
console.log(RentalPrices('rr-sport'));
