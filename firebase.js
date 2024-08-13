// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBmcK3ufp2930gQrzsU_e8ylgPK3vGmPNI",
//   authDomain: "inventory-6971c.firebaseapp.com",
//   projectId: "inventory-6971c",
//   storageBucket: "inventory-6971c.appspot.com",
//   messagingSenderId: "807077502792",
//   appId: "1:807077502792:web:9eaf962b2388d56d805d7d",
//   measurementId: "G-NLDFPVC5RZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firestore = getFirestore(app)

// export {firestore}


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmcK3ufp2930gQrzsU_e8ylgPK3vGmPNI",
  authDomain: "inventory-6971c.firebaseapp.com",
  projectId: "inventory-6971c",
  storageBucket: "inventory-6971c.appspot.com",
  messagingSenderId: "807077502792",
  appId: "1:807077502792:web:9eaf962b2388d56d805d7d",
  measurementId: "G-NLDFPVC5RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Conditional import for analytics
let analytics = null;
if (typeof window !== 'undefined') {
  import('firebase/analytics').then((module) => {
    analytics = module.getAnalytics(app);
  });
}

export { firestore, analytics };