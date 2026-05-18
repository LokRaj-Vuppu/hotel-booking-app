# Hotel Booking App 🏨

A cross-platform **React Native** mobile app for browsing and booking hotels. Features Firebase Firestore as the backend database, Redux Toolkit for state management, interactive maps, and date range selection.

---

## Features

- Browse and search hotels
- View hotel details with images and descriptions
- Interactive map view with hotel locations (`react-native-maps`)
- Date range picker for check-in / check-out selection
- Save/favourite hotels (persisted with AsyncStorage)
- Bottom tab and stack navigation
- State management with Redux Toolkit
- Firebase Firestore as the real-time database
- Runs on Android, iOS, and Web

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React Native (Expo ~51) | Cross-platform mobile framework |
| Firebase (Firestore) | Real-time NoSQL cloud database |
| Redux Toolkit | Global state management |
| React Navigation | Stack + Bottom Tab navigation |
| react-native-maps | Interactive hotel map view |
| react-native-date-ranges | Check-in / check-out date picker |
| AsyncStorage | Local persistent storage (saved hotels) |
| react-native-modals | Modal UI components |

---

## Project Structure

```
hotel-booking-app/
├── screens/          # App screens (Home, Search, Hotel Detail, Saved, etc.)
├── components/       # Reusable UI components
├── assets/           # Images and static files
├── App.js            # Root component
├── StackNavigator.js # Navigation configuration
├── store.js          # Redux store setup
├── SavedReducer.js   # Redux slice for saved hotels
├── firebase.js       # Firebase config and initialisation
├── utils.js          # Helper/utility functions
└── app.json          # Expo configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Expo Go](https://expo.dev/go) app on your phone, or Android/iOS emulator

### Installation

```bash
git clone https://github.com/LokRaj-Vuppu/hotel-booking-app.git
cd hotel-booking-app
npm install
```

### Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Firestore Database**
3. Copy your Firebase config into `firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Run the App

```bash
npx expo start
```

Then open in:
- **Expo Go** — scan the QR code
- **Android Emulator** — press `a`
- **iOS Simulator** — press `i`
- **Web browser** — press `w`

---

## Key Libraries

| Library | Version |
|---------|---------|
| expo | ~51.0.38 |
| firebase | ^11.0.1 |
| @reduxjs/toolkit | ^2.3.0 |
| react-native-maps | 1.14.0 |
| @react-navigation/native | ^6.1.18 |
| react-native-date-ranges | ^2.5.0 |

---

## Author

**LokRaj Vuppu** — [GitHub](https://github.com/LokRaj-Vuppu)
