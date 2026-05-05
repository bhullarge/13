importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCjqb8BE0BBxu6o4MVUC-fbNSO4o7hr4Us",
    authDomain: "class-pass-bdf84.firebaseapp.com",
    databaseURL: "https://class-pass-bdf84-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "class-pass-bdf84",
    storageBucket: "class-pass-bdf84.firebasestorage.app",
    messagingSenderId: "536916373219",
    appId: "1:536916373219:web:59a9035999cc6684f6dfd6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = "🚨 ਵਿਦਿਆਰਥੀ ਬਾਹਰ ਗਿਆ ਹੈ!";
  const notificationOptions = {
    body: payload.notification.body || "ਕਿਰਪਾ ਕਰਕੇ ਚੈੱਕ ਕਰੋ।",
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    vibrate: [500, 200, 500, 200, 500],
    requireInteraction: true, // ਜਿੰਨਾ ਚਿਰ ਕੱਟੋਗੇ ਨਹੀਂ, ਇਹ ਨਹੀਂ ਜਾਵੇਗਾ
    tag: 'student-alert',
    renotify: true
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

