// Firebase Scripts ਲੋਡ ਕਰੋ
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

// ਆਪਣੀ ਉਹੀ Config ਏਥੇ ਪੇਸਟ ਕਰੋ ਜੋ index.html ਵਿੱਚ ਹੈ
const firebaseConfig = {
    apiKey: "AIzaSyCjqb8BE0BBxu6o4MVUC-fbNSO4o7hr4Us",
    authDomain: "class-pass-bdf84.firebaseapp.com",
    databaseURL: "https://class-pass-bdf84-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "class-pass-bdf84",
    storageBucket: "class-pass-bdf84.firebasestorage.app",
    messagingSenderId: "536916373219",
    appId: "1:536916373219:web:59a9035999cc6684f6dfd6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Messaging ਸਰਵਿਸ ਸ਼ੁਰੂ ਕਰੋ
const messaging = firebase.messaging();

// ਬੈਕਗ੍ਰਾਊਂਡ ਵਿੱਚ ਨੋਟੀਫਿਕੇਸ਼ਨ ਦਿਖਾਉਣ ਲਈ
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message received: ', payload);
  
  const notificationTitle = payload.notification.title || "ਕਲਾਸ ਅਪਡੇਟ";
  const notificationOptions = {
    body: payload.notification.body || "ਕੋਈ ਵਿਦਿਆਰਥੀ ਬਾਹਰ ਗਿਆ ਹੈ",
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png' // ਤੁਸੀਂ ਆਪਣਾ ਆਈਕਨ ਲਿੰਕ ਵੀ ਪਾ ਸਕਦੇ ਹੋ
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
