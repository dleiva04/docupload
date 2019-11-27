import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAMt38txqeyu7jds4O4T4RhHqim-pGz2TQ",
    authDomain: "docupload-222c0.firebaseapp.com",
    databaseURL: "https://docupload-222c0.firebaseio.com",
    projectId: "docupload-222c0",
    storageBucket: "docupload-222c0.appspot.com",
    messagingSenderId: "135096649881",
    appId: "1:135096649881:web:32218adf055bb62773d008",
    measurementId: "G-LHHGEFNDSP"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
