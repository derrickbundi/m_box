import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCIfoBBsHmThtp83nX02R0EvXZyisB8yJA',
  authDomain: 'meetup-5cffc.firebaseapp.com',
  databaseURL: 'https://meetup-5cffc.firebaseio.com',
  projectId: 'meetup-5cffc',
  storageBucket: 'meetup-5cffc.appspot.com',
  messagingSenderId: '187865459556',
  appId: '1:187865459556:web:10cf1fecaf7c7dc2c9e871'
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
