// firebase.js

// Konfigurasi project Firebase kamu
var firebaseConfig = {
  apiKey: "AIzaSyDyiEMteZ6eAAQ81AhrFdoWfJ-uJeiR6-k",
  authDomain: "ruka-chatbot-71e27.firebaseapp.com",
  databaseURL: "https://ruka-chatbot-71e27-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ruka-chatbot-71e27",
  storageBucket: "ruka-chatbot-71e27.firebasestorage.app",
  messagingSenderId: "1000017228940",
  appId: "1:1000017228940:web:9d74db1b13ea5e9e1d77a9",
  measurementId: "G-ZRX0C19D50"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Kalau mau pakai Realtime Database:
var db = firebase.database();