// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAM5Oe4WKQlFk8X9xFrU3NnqjpgF7iX_Jg",
  authDomain: "my-react-firebase-app-993b2.firebaseapp.com",
  projectId: "my-react-firebase-app-993b2",
  storageBucket: "my-react-firebase-app-993b2.appspot.com",
  messagingSenderId: "993414589695",
  appId: "1:993414589695:web:b4701a394ecc124378f0ca",
  measurementId: "G-V58ZKRE44D"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
