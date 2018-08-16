// Set the configuration for your app
  // TODO: Replace with your project's config object
  console.log('db connect');
  var config = {
    apiKey: "AIzaSyATOJfW-W9b-AwXcAJS2hTkglcDhzEriqg",
    authDomain: "https://servicenet-desafio1.firebaseapp.com/",
    databaseURL: "https://servicenet-desafio1.firebaseio.com/",
    storageBucket: "gs://servicenet-desafio1.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
      username: 'Daniel',
      email: 'ok',
      
    });
  }
