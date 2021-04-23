

    import firebase from 'firebase/app'
    import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8mfuuNm1KCBwLLvCcXbGTjwyGMWrXReo",
  authDomain: "vue3-learning-fec5f.firebaseapp.com",
  projectId: "vue3-learning-fec5f",
  storageBucket: "vue3-learning-fec5f.appspot.com",
  messagingSenderId: "929687306949",
  appId: "1:929687306949:web:0f59ed87529770bba5a6ac",
  measurementId: "G-YQJ5E0ZBXS"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }

