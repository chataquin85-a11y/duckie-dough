import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJ3xMtvFeRBhDt2wOZp4CMnhWY0u0tB08",
  authDomain: "duckie-guai-faiv-app.firebaseapp.com",
  projectId: "duckie-guai-faiv-app",
  storageBucket: "duckie-guai-faiv-app.firebasestorage.app",
  messagingSenderId: "799995562154",
  appId: "1:799995562154:web:05854540ed29aa6511a8d3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    push(ref(db, 'messages'), { text: userInput });
    alert("Message sent to Firebase!");
});
