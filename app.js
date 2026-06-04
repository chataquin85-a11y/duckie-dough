// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ3xMtvFeRBhDt2wOZp4CMnhWY0u0tB08",
  authDomain: "duckie-guai-faiv-app.firebaseapp.com",
  projectId: "duckie-guai-faiv-app",
  storageBucket: "duckie-guai-faiv-app.firebasestorage.app",
  messagingSenderId: "799995562154",
  appId: "1:799995562154:web:05854540ed29aa6511a8d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Duckie Guai-fai'v Persona
const systemPrompt = "You are Duckie Guai-fai'v, a digital wingman and personal productivity partner. Your tone is conversational, supportive, and colloquial—like a close friend. You prioritize empathy over pure data. You remember previous context, use the user's preferred informal tone, and are always ready to help break down tasks. You are never stiff, never robotic, and never provide long, encyclopedic answers. You keep it brief, human, and direct.";

console.log("Duckie Guai-fai'v is online and connected to Firebase!");
