# 📹 Video Conferencing App

<div align="center">

![Video Conferencing](https://img.shields.io/badge/Video-Conferencing-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

A full-stack real-time video conferencing application with chat functionality, screen sharing, and participant management built using modern web technologies.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Project Structure](#-project-structure)

</div>

---

## 🌟 Features

### 🎥 Video & Audio
- **Real-time Video Conferencing** - High-quality video calls using Agora RTC
- **Audio Communication** - Crystal clear audio transmission
- **Screen Sharing** - Share your screen with meeting participants
- **Recording** - Record your meetings for future reference

### 💬 Communication
- **Real-time Chat** - Text messaging during video calls
- **Participant Management** - See all participants in the meeting
- **User Presence** - Know who's online and in the meeting

### 👤 User Management
- **User Authentication** - Secure login and registration system
- **JWT Token-based Auth** - Secure session management
- **User Profiles** - Personalized user profiles
- **Protected Routes** - Route protection for authenticated users

### 🏢 Room Management
- **Create Rooms** - Start new meeting rooms instantly
- **Join Rooms** - Join existing meetings with room ID
- **Room Persistence** - Meeting rooms stored in MongoDB
- **Participant List** - Real-time participant tracking

---

## 🛠️ Tech Stack

### **Frontend**

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Material-UI](https://img.shields.io/badge/Material--UI-5.13.4-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.11.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Socket.io Client](https://img.shields.io/badge/Socket.io--Client-4.6.2-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Agora](https://img.shields.io/badge/Agora_RTC-4.17.2-099DFD?style=for-the-badge&logo=agora&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.4.0-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### **Backend**

![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.2.2-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4.6.2-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-9.0.0-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1.0-338033?style=for-the-badge&logo=letsencrypt&logoColor=white)

### **Development Tools**

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

## 📁 Project Structure

```
Video-Conferencing-App/
│
├── code/
│   ├── client/                          # Frontend React Application
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   ├── index.html              # Main HTML file
│   │   │   ├── logo.png
│   │   │   ├── logo192.png
│   │   │   ├── logo512.png
│   │   │   ├── manifest.json           # PWA manifest
│   │   │   └── robots.txt
│   │   │
│   │   ├── src/
│   │   │   ├── components/            # Reusable React Components
│   │   │   │   ├── Chat.jsx           # Real-time chat component
│   │   │   │   ├── Controls.jsx       # Meeting controls (mute, video, etc.)
│   │   │   │   ├── MeetData.jsx       # Meeting metadata display
│   │   │   │   ├── Participants.jsx   # Participant list component
│   │   │   │   ├── ProfileCard.jsx    # User profile card
│   │   │   │   └── VideoPlayer.jsx    # Video stream player
│   │   │   │
│   │   │   ├── context/              # React Context API
│   │   │   │   ├── authContext.jsx   # Authentication context
│   │   │   │   └── SocketContext.jsx # Socket.io context
│   │   │   │
│   │   │   ├── images/               # Static images
│   │   │   │   ├── box-front.avif
│   │   │   │   ├── home-bg.png
│   │   │   │   └── logo.png
│   │   │   │
│   │   │   ├── pages/                # Page components
│   │   │   │   ├── Home.jsx          # Landing page
│   │   │   │   ├── Login.jsx         # Login page
│   │   │   │   ├── MeetRoom.jsx      # Video conference room
│   │   │   │   ├── Profile.jsx       # User profile page
│   │   │   │   └── Register.jsx      # Registration page
│   │   │   │
│   │   │   ├── protectedRoute/       # Route protection
│   │   │   │   ├── LoginProtector.jsx    # Redirect if logged in
│   │   │   │   └── RouteProtecter.jsx    # Auth required routes
│   │   │   │
│   │   │   ├── styles/               # CSS styling files
│   │   │   │   ├── Home.css
│   │   │   │   ├── LoginRegister.css
│   │   │   │   ├── MeetData.css
│   │   │   │   ├── MeetPage.css
│   │   │   │   ├── Profile.css
│   │   │   │   └── profileCard.css
│   │   │   │
│   │   │   ├── AgoraRTMSetup.js      # Agora RTM configuration
│   │   │   ├── AgoraSetup.js         # Agora RTC configuration
│   │   │   ├── App.css               # Main app styles
│   │   │   ├── App.js                # Main app component
│   │   │   ├── App.test.js           # App tests
│   │   │   ├── index.css             # Global styles
│   │   │   ├── index.js              # App entry point
│   │   │   ├── logo.svg
│   │   │   ├── reportWebVitals.js    # Performance monitoring
│   │   │   ├── setupTests.js         # Test configuration
│   │   │   └── Socket.js             # Socket.io client setup
│   │   │
│   │   ├── package.json              # Frontend dependencies
│   │   ├── package-lock.json
│   │   └── README.md                 # Client documentation
│   │
│   └── server/                        # Backend Node.js Application
│       ├── controllers/
│       │   └── auth.js               # Authentication controllers
│       │
│       ├── middleware/
│       │   └── auth.js               # JWT verification middleware
│       │
│       ├── models/
│       │   ├── Rooms.js              # Room schema
│       │   └── User.js               # User schema
│       │
│       ├── routes/
│       │   └── auth.js               # Authentication routes
│       │
│       ├── socket/
│       │   └── roomHandler.js        # Socket.io room logic
│       │
│       ├── index.js                  # Server entry point
│       ├── package.json              # Backend dependencies
│       └── package-lock.json
│
└── README.md                          # This file
```

---

## 🚀 Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**
- **Agora Account** (for RTC/RTM credentials)

### Clone Repository

```bash
git clone https://github.com/SabarishR08/Video-Conferencing-App.git
cd Video-Conferencing-App
```

### Server Setup

1. Navigate to server directory:
```bash
cd code/server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in server directory:
```env
JWT_SECRET=your_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/meet-app
PORT=6001
```

4. Start MongoDB service:
```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo systemctl start mongod
```

5. Start the server:
```bash
npm start
# or with nodemon for development
npx nodemon index.js
```

Server will run on `http://localhost:6001`

### Client Setup

1. Navigate to client directory:
```bash
cd code/client
```

2. Install dependencies:
```bash
npm install
```

3. Create `AgoraSetup.js` with your Agora credentials:
```javascript
export const config = {
  appId: "YOUR_AGORA_APP_ID",
  token: null, // or your token
};
```

4. Create `AgoraRTMSetup.js` for RTM configuration:
```javascript
export const rtmConfig = {
  appId: "YOUR_AGORA_APP_ID",
  token: null,
};
```

5. Start the client:
```bash
npm start
```

Client will run on `http://localhost:3000`

---

## 📖 Usage

### 1. **Register/Login**
   - Navigate to the app homepage
   - Click "Register" to create a new account
   - Login with your credentials

### 2. **Create/Join Meeting**
   - From the home page, create a new meeting room
   - Share the room ID with participants
   - Or join an existing meeting using room ID

### 3. **During Meeting**
   - **Toggle Video/Audio**: Use controls to mute/unmute
   - **Screen Share**: Share your screen with participants
   - **Chat**: Send messages to all participants
   - **View Participants**: See who's in the meeting
   - **Record**: Start/stop meeting recording

### 4. **Profile Management**
   - Access your profile from the navigation
   - Update your information
   - View your meeting history

---

## 🔐 Environment Variables

### Server (.env)
```env
# JWT Configuration
JWT_SECRET=your_secret_key

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/meet-app

# Server Port
PORT=6001
```

### Client
Configure Agora credentials in:
- `src/AgoraSetup.js`
- `src/AgoraRTMSetup.js`

---

## 🎯 Key Dependencies

### Client Dependencies
- **agora-rtc-sdk-ng** - Real-time video/audio communication
- **agora-rtm-sdk** - Real-time messaging
- **socket.io-client** - WebSocket client
- **react-router-dom** - Client-side routing
- **@mui/material** - UI components
- **axios** - HTTP client
- **recordrtc** - Meeting recording

### Server Dependencies
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **socket.io** - WebSocket server
- **jsonwebtoken** - JWT authentication
- **bcrypt** - Password hashing
- **cors** - Cross-origin resource sharing

---

## 🔧 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `GET /auth/user/:id` - Get user details

### WebSocket Events
- `join-room` - Join a meeting room
- `user-joined` - User joined notification
- `new-chat` - Send chat message
- `new-chat-arrived` - Receive chat message
- `get-participants` - Get room participants
- `participants-list` - Receive participant list

---

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Mobile browsers (limited features)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

<div align="center">

### **Sabarish R**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sabarishr08)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabarish.edu2024@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SabarishR08)

**Email:** sabarish.edu2024@gmail.com  
**LinkedIn:** [linkedin.com/in/sabarishr08](https://www.linkedin.com/in/sabarishr08)

</div>

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

</div>
