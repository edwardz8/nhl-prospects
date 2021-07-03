import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import index from './index.css'
import firebase from 'firebase'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)

app.use(router)
app.use(index)

app.mount('#app')

var firebaseConfig = {
    apiKey: "AIzaSyAQc7DAioRGOKLmYGMnz0zKgyjWdkFUddw",
    authDomain: "vite-booking.firebaseapp.com",
    projectId: "vite-booking",
    storageBucket: "vite-booking.appspot.com",
    messagingSenderId: "269692521552",
    appId: "1:269692521552:web:8cea76422fbddabab29555",
    measurementId: "G-FDDJV7HS6X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

