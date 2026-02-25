// Agora RTC Configuration Example
// Rename this file to AgoraSetup.js and add your Agora App ID

export const config = {
  // Get your App ID from: https://console.agora.io/
  appId: "YOUR_AGORA_APP_ID_HERE",
  
  // Token is optional for testing, required for production
  // Generate tokens using Agora token server
  token: null, // or "YOUR_AGORA_TOKEN_HERE"
  
  // Optional: Channel name (will be set dynamically in the app)
  channel: null,
};

// Instructions:
// 1. Create an account at https://console.agora.io/
// 2. Create a new project
// 3. Copy your App ID from the project dashboard
// 4. Replace "YOUR_AGORA_APP_ID_HERE" with your actual App ID
// 5. Rename this file from AgoraSetup.example.js to AgoraSetup.js
