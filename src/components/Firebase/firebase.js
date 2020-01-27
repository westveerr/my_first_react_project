import app from 'firebase/app';

const config = {
  apiKey: "AIzaSyCZH8dFhRgZnCyhWAiqoPuJdMc-yx8oI5M",
  authDomain: "my-first-react-app-b33e5.firebaseapp.com",
  databaseURL: "https://my-first-react-app-b33e5.firebaseio.com",
  projectId: "my-first-react-app-b33e5",
  storageBucket: '',
  messagingSenderId: "1048849389000",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
