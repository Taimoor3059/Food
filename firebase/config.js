import * as firebase from "firebase";
import "@firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBHohqLM8zlHvVdr0ES_YtjpuE9f7Ie4fI",
    authDomain: "my-app-49104.firebaseapp.com",
    databaseURL: "https://my-app-49104.firebaseio.com",
    projectId: "my-app-49104",
    storageBucket: "my-app-49104.appspot.com",
    messagingSenderId: "412669939741",
    appId: "1:412669939741:web:bd39a1d326e2bfe44a76f4",
    measurementId: "G-G08K7201XM"
  };
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (e) {
      console.log(e)
  }
  export default firebase;


