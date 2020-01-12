// firebase configuration
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: 'leftovers-d9b66.firebaseapp.com',
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: 'leftovers-d9b66',
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
