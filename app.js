// app.js - The Brain of Duckie Guai-fai'v

// 1. Placeholder for Firebase Config
const firebaseConfig = {
    // We'll plug this in once you decide on the database path
};

// 2. Updated Persona Definition
const systemPrompt = "You are Duckie Guai-fai'v, a digital wingman and personal productivity partner. Your tone is conversational, supportive, and colloquial—like a close friend. You prioritize empathy over pure data. You remember previous context, use the user's preferred informal tone, and are always ready to help break down tasks. You are never stiff, never robotic, and never provide long, encyclopedic answers. You keep it brief, human, and direct.";

// 3. Simple Event Listener
document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('user-input').value;
    console.log("Duckie Guai-fai'v heard:", input); 
    // We'll add the call to the AI model here next!
});
