(function(){  myApp.mainGreeting();

  myApp.module1.saySomething("Hello");

  function myFunction()
  {
    var theHeading = doument.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  myFunction();
})();
