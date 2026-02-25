// Agora RTM (Real-Time Messaging) Configuration Example
// Rename this file to AgoraRTMSetup.js and add your Agora App ID

export const rtmConfig = {
  // Get your App ID from: https://console.agora.io/
  // Use the same App ID as your RTC configuration
  appId: "YOUR_AGORA_APP_ID_HERE",
  
  // Token is optional for testing, required for production
  // Generate tokens using Agora token server
  token: null, // or "YOUR_AGORA_RTM_TOKEN_HERE"
};

// Instructions:
// 1. Use the same App ID from your Agora RTC setup
// 2. Replace "YOUR_AGORA_APP_ID_HERE" with your actual App ID
// 3. Rename this file from AgoraRTMSetup.example.js to AgoraRTMSetup.js
// 4. For production, implement token generation on your server
//    Documentation: https://docs.agora.io/en/rtm/develop/authentication-workflow
