import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCL4YvJ5IWcoR4HHUruLruuHacLEGDHf4E",
    authDomain: "example-5c400.firebaseapp.com",
    databaseURL: "https://example-5c400.firebaseio.com",
    projectId: "myapp-project-123",
    storageBucket: "myapp-project-123.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1: 160310118508: web: 840e059e4e86c2b6d77049",
    measurementId: "G-YH73VD2TS9"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore()