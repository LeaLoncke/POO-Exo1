// Current year
var date = new Date();
var currentYear = date.getFullYear();

// Object
var user = {
  firstName: "John",
  lastName: "Doe",
  residentialCountry: "England",
  age: 25,
  meansOfPayment: ["visa", "mastercard", "paypal"],
  getFirstName: function() {
    alert(this.firstName);
  },
  getLastName: function() {
    alert(this.lastName);
  },
  getBirthYear: function() {
    alert(currentYear - this.age);
  }

}

// Called method of the object
user.getFirstName();
user.getLastName();
user.getBirthYear();
