import firebase from "firebase/app";
import "firebase/firestore";
require("dotenv").config();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "website-react-69b18",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID
};
firebase.initializeApp(config);

const database = firebase.firestore();

export { firebase, database as default };
