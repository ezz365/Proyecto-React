import firebase from "firebase/app";
import "firebase/firestore";

// configuracion del firebase
const firebaseConfig = {
  apiKey: "AIzaSyAivYfUPvDSNMEtY_tqf6FZ8OSjz6ke0lM",
  authDomain: "proyecto-react-b579c.firebaseapp.com",
  projectId: "proyecto-react-b579c",
  storageBucket: "proyecto-react-b579c.appspot.com",
  messagingSenderId: "939300002783",
  appId: "1:939300002783:web:35f372c4d1abed5e52426a",
  measurementId: "G-LZK1VJCPCY"
};

//inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = ()=>{
    return firebase.firestore(app)
}
