// business  logic
function Contact(first, last, number, email, location, country, notes) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = number;
  this.email = email;
  this.location = location;
  this.country = country;
  this.notes = notes;

}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-number").val("");
  $("input#new-email").val("");
  $("input#new-location").val("");
  $("input#new-country").val("");
  $("input#new-notes").val("");
}
// returns the names as outputs
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedNumber = $("input#new-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedNotes = $("input#new-notes").val();


    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedNumber, inputtedEmail, inputtedLocation, inputtedCountry, inputtedNotes);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $(".cont").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone-number").text(newContact.phoneNumber);
      $(".email").text(newContact.email);
      $(".location").text(newContact.location);
      $(".country").text(newContact.country);
      $(".notes").text(newContact.notes);
    });
    resetFields()
  });

});
