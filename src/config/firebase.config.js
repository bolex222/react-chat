import firebase from 'firebase';
import firebaseConfig from '../firebase.json'
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
export { auth }