import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyAgrVSpIGAOgAJ-nw-L8WCCRmRppRRGMeM",
        authDomain: "ben-todo-app.firebaseapp.com",
        databaseURL: "https://ben-todo-app.firebaseio.com",
        projectId: "ben-todo-app",
        storageBucket: "ben-todo-app.appspot.com",
        messagingSenderId: "702240210466"
      };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;