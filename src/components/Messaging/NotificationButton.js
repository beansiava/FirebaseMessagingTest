import React, {Component} from 'react';
import { withFirebase } from '../Firebase';



class NotificationButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onPress = event => {
        this.props.firebase.askForPermission();
        event.preventDefault();
    };

    // NEED TO FIND OUT WHAT TO DO IF NOTIFICATIONS ARE BLOCKED>
    //HOW DO WE UNBLOCK THEM? 
    render() { 
        return ( 
            <button onClick={this.onPress} >
                Click to enable notifications
            </button>
         );
    }
}

const onPress = event => {
    this.props.firebase.askForPermission();
    event.preventDefault();
};

export const notificationFunction = (props) => {
    const onPress = event => {
        props.firebase.askForPermission();
        event.preventDefault();
    };
    return ( 
        <button onClick={onPress} >
                Click to enable notifications
        </button>
     );
}

export const FireFunction = withFirebase(notificationFunction);

export const FireNotificationButton = withFirebase(NotificationButton);

export default NotificationButton;