// Current year
var date = new Date();
var currentYear = date.getFullYear();


// Objects
var user = {
  firstName: "John",
  lastName: "Doe",
  residentialCountry: "England",
  age: 25,
  meansOfPayment: ["Visa", "Mastercard", "Paypal"],
  getFirstName: function() {
    alert(this.firstName);
  },
  getLastName: function() {
    alert(this.lastName);
  },
  getBirthYear: function() {
    alert(currentYear - this.age);
  }
} // End of user

var userPermissions = {
  minAge: 16,
  country: ["FRANCE", "ENGLAND", "GERMANY"],
  meansOfPayment: ["MASTERCARD", "VISA"],
  ageAllowed: function() {
    if (user.age >= this.minAge) {
      alert("You have more than " + this.minAge + " years old so you can pass !");
    } else {
      alert("You have no more " + this.minAge + " years old so you can NOT pass !");
    }
  },
  countryAllowed: function() {
    if (this.country.indexOf(user.residentialCountry.toUpperCase()) !== -1 ) {
      alert("You live in " + user.residentialCountry + " so you can pass !");
    } else {
      alert("You live in " + user.residentialCountry + " so you can NOT pass !");
    }
  },
  meansOfPaymentAllowed: function() {
    var meansOfPaymentValid = [];
    for (var i = 0; i < user.meansOfPayment.length; i++) {
      if (this.meansOfPayment.indexOf(user.meansOfPayment[i].toUpperCase()) !== -1 ) {
        meansOfPaymentValid.push( " " + user.meansOfPayment[i]);
      }
    }
    if (meansOfPaymentValid.length > 0) {
      alert("You can use these means of payment:" + meansOfPaymentValid + " !");
    } else {
      alert("You can not use means of payment !");
    }
  }
} // End of userPermissions


// Call the methods of objects in an object !!
var calledAllMethods = {
  userData: user.getFirstName() + user.getLastName() + user.getBirthYear(),
  userAuthorizations: userPermissions.ageAllowed() + userPermissions.countryAllowed() + userPermissions.meansOfPaymentAllowed()
}


// Call the object
calledAllMethods;



//
