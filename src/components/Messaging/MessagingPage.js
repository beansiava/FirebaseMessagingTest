import React from 'react';
import { compose } from 'recompose';
import NotificationButton, {FireNotificationButton} from '../Messaging'
import {withFirebase} from '../Firebase'


const MessagingPage = () => {
    return ( 
    <div>
        <FireNotificationButton></FireNotificationButton>
    </div> 
    );
}


 
export default MessagingPage;
