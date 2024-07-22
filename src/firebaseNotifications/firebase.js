// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAM5Oe4WKQlFk8X9xFrU3NnqjpgF7iX_Jg",
  authDomain: "my-react-firebase-app-993b2.firebaseapp.com",
  projectId: "my-react-firebase-app-993b2",
  storageBucket: "my-react-firebase-app-993b2.appspot.com",
  messagingSenderId: "993414589695",
  appId: "1:993414589695:web:b4701a394ecc124378f0ca",
  measurementId: "G-V58ZKRE44D"
};
initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BIYrbAag7Mp5U5THsoGoo1CPu-F2-9H64WmJIJn7RQxR10_k3JOjMKK4_b9hTkuoI65MMc0NJra1A4ScfzKyAOg` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

  
