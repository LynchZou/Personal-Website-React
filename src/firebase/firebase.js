import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyA3Qmzg73Y43rEHcqa_x1dFuUlo4GG-KGY",
  authDomain: "website-react-69b18.firebaseapp.com",
  databaseURL: "https://website-react-69b18.firebaseio.com",
  projectId: "website-react-69b18",
  storageBucket: "website-react-69b18.appspot.com",
  messagingSenderId: "819408276949"
};
firebase.initializeApp(config);

const database = firebase.firestore();

export { firebase, database as default };
