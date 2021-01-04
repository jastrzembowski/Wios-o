import firebase from "firebase"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBRyQhSeTiXAi8jGeDfC9Bi-PN5ePLxeWc",
    authDomain: "dancing-app-77d2a.firebaseapp.com",
    databaseURL: "https://dancing-app-77d2a.firebaseio.com",
    projectId: "dancing-app-77d2a",
    storageBucket: "dancing-app-77d2a.appspot.com",
    messagingSenderId: "791564787488",
    appId: "1:791564787488:web:7255525d09890000448145"
  })

export const auth = app.auth()
export default app