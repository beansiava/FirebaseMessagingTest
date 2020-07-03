import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';


const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
  
const prodConfig ={
    apiKey: process.env.REACT_APP_DEV_API_KEY,
    authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_DEV_APP_ID,
    measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID
};
  
const config = 
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig;


class Firebase {
    constructor () {
        app.initializeApp(config)

        this.auth = app.auth();
        const messaging = app.messaging();
        // messaging.requestPermission()
        //     .then(function(){
        //         console.log('have permission')
        //         return messaging.getToken();
        //     })
        //     .then(function(token){
        //         console.log(token);
        //     })
        //     .catch(function(err) {
        //         console.log(err, 'Error not allowed to send notifications');
        //     })


        messaging.usePublicVapidKey
            ("BOktXZdsw2QPQvRn6bNKyUzcBL0f_vvVGKKcdpC9OychcpATG0GyYAhqYGAlhVPnqwI4RmiKVuIztqfR4HYepaY");
        
            messaging.onMessage(function(payload){
                console.log('onMessage: ', payload);
            });

        
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email,password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password);


    //**Messaging API  **/
    askForPermission = async () => {
        try {
          const messaging = app.messaging();
          await messaging.requestPermission();
          const token = await messaging.getToken();
          console.log('token do usuário:', token);
          
          return token;
        } catch (error) {
          console.error(error);
        }
      }

}

// KEY PAIR
// BOktXZdsw2QPQvRn6bNKyUzcBL0f_vvVGKKcdpC9OychcpATG0GyYAhqYGAlhVPnqwI4RmiKVuIztqfR4HYepaY

export default Firebase;