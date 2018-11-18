import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAgrVSpIGAOgAJ-nw-L8WCCRmRppRRGMeM",
    authDomain: "ben-todo-app.firebaseapp.com",
    databaseURL: "https://ben-todo-app.firebaseio.com",
    projectId: "ben-todo-app",
    storageBucket: "ben-todo-app.appspot.com",
    messagingSenderId: "702240210466"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 28
  }
}).then(()=> {
  console.log('Set worked');
}, (e) => {
  console.log('Set failed');
});

// firebaseRef.update({
//   'app/name': 'Todo application',
//   'user/name': 'Ben'
// });

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// })

//Getting data

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got database', snapshot.val())
// ;}, (e)=> {
//   console.log('Unable to fetch', e)
// })

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got database', snapshot.key, snapshot.val())
// ;}, (e)=> {
//   console.log('Unable to fetch', e)
// })

//Seting change listener

//  var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// }

// firebaseRef.on('value', logData);
// firebaseRef.off(); 

// firebaseRef.update({isRunning: false});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=> {
  console.log('child_added', snapshot.key, snapshot.val())
});

var todoRef = todosRef.push({text: 'Increase income'});
console.log('Todo id', todoRef.key);

var todoRef = todosRef.push({text: 'Reach 10k/month'});
console.log('Todo id', todoRef.key);