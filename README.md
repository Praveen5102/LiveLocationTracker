# 📍 Live Location Tracker

A simple **React Native** app that shows the user’s **real-time location** on a map using Expo and `react-native-maps`.  
This project was built as part of the **React Native Developer Internship assignment** for **Localtoto**.

---

## 🚀 Features

- ✅ Requests location permission on app launch  
- 🚫 Displays a message if permission is denied  
- 🗺️ Displays a map centered on the user’s location if permission is granted  
- 📍 Shows a marker on the user’s current position  
- 🔄 Updates the marker **in real time** as the user moves  

---

## 🛠️ Tech Stack

- **Framework:** React Native (Expo)
- **Libraries:**
  - `expo-location` — for GPS permissions & live location tracking
  - `react-native-maps` — for map display and markers

---

## 📱 Demo Video

🎥 **Watch the working demo here:**  
👉 [Demo Video Link](https://drive.google.com/file/d/1AXBTadLgbQMTU_6PBJw8KF2VmlPEQzHD/view?usp=sharing)

*(The video shows the app requesting permissions, loading the map, and tracking live location updates.)*

---

## 📦 Installation & Run

Clone this repository and run locally:

```bash
git clone https://github.com/praveenkumargone/LiveLocationTracker.git
cd LiveLocationTracker
npm install
npx expo start
