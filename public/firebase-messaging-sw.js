//public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

self.addEventListener('fetch', () => {
  const urlParams = new URLSearchParams(location.search);
  self.firebaseConfig = Object.fromEntries(urlParams);
});

const defaultConfig = {
    apiKey: "AIzaSyATZI0eFGrMA2tWmYQ8P0Mn-2MhyV-6yDs",
    authDomain: "fir-fcm-396a3.firebaseapp.com",
    projectId: "fir-fcm-396a3",
    storageBucket: "fir-fcm-396a3.appspot.com",
    messagingSenderId: "235395329120",
    appId: "1:235395329120:web:f34d389e52068047c52705",
    measurementId: "G-J92TX5Z7WW"
};

firebase.initializeApp(self.firebaseConfig || defaultConfig);
if (firebase.messaging.isSupported()) {
  const messaging = firebase.messaging();
  const channel = new BroadcastChannel('notifications');
  messaging.onBackgroundMessage(function (payload) {
    //can not console.log here
    channel.postMessage(payload);
  });
}
