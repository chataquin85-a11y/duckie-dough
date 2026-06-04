// ... existing code ...
const app = initializeApp(firebaseConfig);

// NEW: This code prints the confirmation message directly to your app
const confirmation = document.createElement('p');
confirmation.innerText = "Duckie Guai-fai'v is online and connected to Firebase!";
document.getElementById('chat-container').appendChild(confirmation);

console.log("Duckie Guai-fai'v is online and connected to Firebase!");
// ... existing code ...
