import React from 'react';
import { compose } from 'recompose';
import NotificationButton, {FireNotificationButton, FireFunction} from '../Messaging'
import {withFirebase} from '../Firebase'


const MessagingPage = () => {
    return ( 
    <div>
        <FireNotificationButton></FireNotificationButton>
        <FireFunction></FireFunction>
    </div> 
    );
}


 
export default MessagingPage;
