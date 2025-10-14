# Quick Reference - Real-Time Chat Application

## Important Note
⚠️ **This repository contains a Real-Time Chat Application, NOT a Currency Converter.**

If you were looking for a currency converter, this is not the correct project.

---

## What This Project Is

A **Real-Time Chat Application** built with:
- **Frontend:** React.js + Socket.IO Client
- **Backend:** Node.js + Express.js + Socket.IO Server
- **Communication:** WebSocket (real-time bidirectional)

---

## Quick Start

### 1. Start Backend Server
```bash
node index.js
```
Runs on: `http://localhost:5000`

### 2. Start Frontend
```bash
npm install
npm start
```
Opens: `http://localhost:3000`

### 3. Test
Open multiple browser tabs to `http://localhost:3000` and start chatting!

---

## Key Files

| File | Purpose |
|------|---------|
| `index.js` | Backend server with Socket.IO |
| `App.js` | React frontend component |
| `package.json` | Dependencies and scripts |
| `README.md` | Original project README |
| `PROJECT_DESCRIPTION.md` | Detailed documentation (this project) |

---

## Architecture

```
Browser (React)  ←── WebSocket ──→  Server (Node.js)
    Port 3000                         Port 5000
```

---

## Main Features

✅ Real-time messaging  
✅ Multi-user support  
✅ Instant message broadcasting  
✅ Simple, clean UI  
✅ WebSocket communication  

---

## How It Works

1. User types message in input field
2. Clicks "Send" button
3. Message sent to server via WebSocket
4. Server broadcasts to ALL connected clients
5. All users see the message instantly

---

## Technologies Used

**Frontend:**
- React 19.1.0
- Socket.IO Client 4.8.1

**Backend:**
- Node.js
- Express.js
- Socket.IO Server
- CORS middleware

---

## For More Details

See `PROJECT_DESCRIPTION.md` for comprehensive documentation including:
- Detailed code analysis
- Setup instructions
- Architecture diagrams
- Feature descriptions
- Enhancement ideas
- Troubleshooting guide

---

## Developer Info

- **Name:** Varsha B
- **Company:** CODTECH IT Solutions
- **Intern ID:** CT04DH37
- **Domain:** MERN Stack Web Development
- **Duration:** 4 Weeks
- **Mentor:** Neela Santosh

---

## Need Help?

1. Check `PROJECT_DESCRIPTION.md` for detailed documentation
2. Check `README.md` for original project overview
3. Verify both backend and frontend are running
4. Check console logs for connection issues

---

**Repository:** [Varsha20041311/Real-time-chat-application](https://github.com/Varsha20041311/Real-time-chat-application)
