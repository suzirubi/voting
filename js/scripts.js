$(function() {
  var age = parseInt(prompt("How old are you"));

  if (age<18) {
    $("#minorLinks").show();
  } else {
    $("#adultLinks").show();
  }


});
