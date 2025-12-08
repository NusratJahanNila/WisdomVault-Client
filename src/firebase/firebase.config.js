import { initializeApp } from 'firebase/app'
// console.log(import.meta.env.VITE_APIKEY,import.meta.env.VITE_AUTHDOMAIN,import.meta.env.VITE_PROJECTID,import.meta.env.VITE_STORAGEBUCKET,import.meta.env.VITE_MESSAGINGID,import.meta.env.VITE_APPID,)
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGID,
//   appId: import.meta.env.VITE_APPID,

 apiKey: "AIzaSyCEoHpQO1aKiyEn4vONug7M737oeJPDWNU",
  authDomain: "wisdom-vault-696d1.firebaseapp.com",
  projectId: "wisdom-vault-696d1",
  storageBucket: "wisdom-vault-696d1.firebasestorage.app",
  messagingSenderId: "856173087062",
  appId: "1:856173087062:web:c0811872acb8427dbceef7"
}

export const app = initializeApp(firebaseConfig)
