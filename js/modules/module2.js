  myApp.module1 = {
  // this would be a feature-specific module, like all things video
  saySomething(message) {
    console.log(myApp.mainMessage, message, `Second File!`);
  },

  doSomething() {
    console.log('called module1 - doSomething', 'hey, this just changed!');
  }
};
