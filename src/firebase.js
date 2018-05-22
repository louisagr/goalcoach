import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyANf_W5Mi-fqhbR4bfbYqbZFLtndgAThPE",
    authDomain: "goalcoach-d8393.firebaseapp.com",
    databaseURL: "https://goalcoach-d8393.firebaseio.com",
    projectId: "goalcoach-d8393",
    storageBucket: "goalcoach-d8393.appspot.com",
    messagingSenderId: "496219749677"
  };

export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref("goals");

export const completeGoalRef = firebase.database().ref("completeGoals");