
  var myApp = {
    // we could put module-specific global variables here
    mainMessage : "Welcome to the app!",

    mainGreeting(){
      console.log('Welcome');
    }

};

  myApp.module1 = {
  // this would be a feature-specific module, like all things video
  saySomething(message) {
    console.log(myApp.mainMessage, message, `Second File!`);
  },

  doSomething() {
    console.log('called module1 - doSomething', 'hey, this just changed!');
  }
};

myApp.module2 = {
  // add another module
  doSomethingElse() {
    console.log('called doSomethingelse from module 2', 'changing this file');
  }
};

(function(){  myApp.mainGreeting();

  myApp.module1.saySomething("Hello");

  function myFunction()
  {
    var theHeading = doument.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  myFunction();
})();
