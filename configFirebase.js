import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCbLutnKOl7SJBUTmVaPhFl28m7Q7cVrKE",
  authDomain: "reactnativeapp-9041e.firebaseapp.com",
  databaseURL: "https://reactnativeapp-9041e.firebaseio.com",
  projectId: "reactnativeapp-9041e",
  storageBucket: "",
  messagingSenderId: "7857104875"
};

firebase.initializeApp(config);

export const database = firebase.database();