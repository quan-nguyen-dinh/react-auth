import { firebaseConfig } from './constant';
import firebase from "firebase/app";
import "firebase/messaging";
import 'firebase/auth';
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

let messaging ;

if (typeof window !== "undefined") {
  if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
  }
}

//Firebase Authentication
export const auth = firebase.auth();

//Firebase Store
export const firestore = firebase.firestore();

// firestore.collection("messages").add({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });

//Firebase Clound Messaging
export const getMessagingToken = async () => {
  let currentToken = "";
  if (!messaging) return;
  try {
    currentToken = await messaging.getToken({
      vapidKey: 'BDHEhb6PLYWVTkQG6BtVx5SWVoJoVVoi6MPM4WxXSSFLdS32nihDngHR5DiZmsFn8Kd5w18Kpg1-DGpXJCQ-QNs',
    });
    console.log("FCM registration token", currentToken);
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
