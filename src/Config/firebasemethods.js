import app from "./firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);
let signUpUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    // === this "then" will give the status of Authentication. ===
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // user successfully registerd in authentication
        const user = userCredential.user;
        const refrence = ref(database, `users/${user.uid}`);
        obj.id = user.uid;
        set(refrence, obj)
          // === this "then" will give the status of database function
          .then(() => {
            // this "resolve" is our custom message which will show in signup page "then"

            // this "resolve" is our custom message which will show in signup page "then"
            resolve("User Created Successfully and send to database");
          })
          .catch((errr) => {
            reject(errr);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

let Signout = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        resolve("user loggedout");
      })
      .catch((error) => {
        // An error happened.
        reject(error);
      });
  });
};

let LoginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const reference = ref(database, `users/${user.uid}`);
        onValue(reference, (e) => {
          let status = e.exists();
          console.log(status);
          if (status) {
            resolve(e.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage);
      });
  });
};
let checkUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        resolve(uid);
        // ...
      } else {
        reject("no User Login");
        // User is signed out
        // ...
      }
    });
  });
};

let sendData = (obj, node, id) => {
  let postListRef;
  return new Promise((resolve, reject) => {
    if (id) {
      postListRef = ref(database, `${node}/${id}`);
    } else {
      let addRef = ref(database, node);
      obj.id = push(addRef).key;
      postListRef = ref(database, `${node}/${obj.id}`);
    }
    set(postListRef, obj)
      .then((res) => {
        resolve(`Data send to this node ${node}/${obj.id} successfully.`);
      })
      .catch((err) => {
        reject("Failed to end data");
      });
  });
};

let getData = (node, userId) => {
  let dbReference = ref(database, `${node}/${userId ? userId : ""}`);
  return new Promise((resolve, reject) => {
    onValue(
      dbReference,
      (data) => {
        if (data.exists()) {
          let userData = data.val();
          if (userId) {
            resolve(userData);
          } else {
            let dataArr = Object.values(userData);
            resolve(dataArr);
          }
        } else {
          reject("Data not found");
        }
      },
      {
        onlyOnce: false,
      }
    );
  });
};

let sendResetPwdEmail = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      alert("Verification Email sent!");
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorMessage} ${errorCode}`);
      // ..
    });
};
let deleteData = (node, listId) => {
  if (!listId) {
    let dbReference = ref(database, `${node}`);
    return new Promise((resolve, reject) => {
      set(dbReference, null)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  } else {
    let dbReference = ref(database, `${node}/${listId}`);
    return new Promise((resolve, reject) => {
      set(dbReference, null)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
export {
  sendResetPwdEmail,
  deleteData,
  signUpUser,
  LoginUser,
  Signout,
  database,
  checkUser,
  sendData,
  getData,
};
