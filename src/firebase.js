import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDG8oXD3_y7YKCqUXwBqAiUx4ThQlcpg8c",
  authDomain: "firegram-5f861.firebaseapp.com",
  projectId: "firegram-5f861",
  storageBucket: "firegram-5f861.appspot.com",
  messagingSenderId: "5526071573",
  appId: "1:5526071573:web:bfad4ea6f52539213b611c"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

// initializes a timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }


