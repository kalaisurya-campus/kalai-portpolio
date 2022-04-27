import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import configs from "./configs";

firebase.initializeApp(configs);

const auth = firebase.auth();

const fs = firebase.firestore();

const storage = firebase.storage();

export { auth, fs, storage };
