// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBH00UZAIJd8vRAEqbGV391YTA2Fae2cCM",
    authDomain: "mydata-11fdb.firebaseapp.com",
    projectId: "mydata-11fdb",
    storageBucket: "mydata-11fdb.firebasestorage.app",
    messagingSenderId: "824237451051",
    appId: "1:824237451051:web:db656d9ddedafa54aa476e",
    measurementId: "G-DBTR8K5PBV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);