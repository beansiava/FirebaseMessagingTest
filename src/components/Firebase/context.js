import React from 'react';
 
const FirebaseContext = React.createContext(null);
 
//Define this as higher order component so context knows about the firebase instance
export const withFirebase = Component => props => (
    <FirebaseContext>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext>
);

export default FirebaseContext;