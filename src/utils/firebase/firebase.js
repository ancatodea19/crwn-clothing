import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwWNNemFosiMAjy7LQYoc8Luu7FCfNbT4",
    authDomain: "crwn-clothing-db-9ad30.firebaseapp.com",
    projectId: "crwn-clothing-db-9ad30",
    storageBucket: "crwn-clothing-db-9ad30.firebasestorage.app",
    messagingSenderId: "839690512140",
    appId: "1:839690512140:web:353a0128ddf4d408730b29",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("erros creating the user", error.message);
        }
    }

    return userDocRef;
};
