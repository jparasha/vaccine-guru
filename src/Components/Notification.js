import { Component } from "react";
//https://www.pluralsight.com/guides/html5-desktop-notifications-with-react
class SimpleNotification extends Component {
    constructor(props) {
        super(props);
        this.showNotification = this.showNotification.bind(this);
    }

    componentDidMount() {
        if (!("Notification" in window)) {
            console.log("This browser does not support desktop notification");
        } else {
            Notification.requestPermission();
        }
    }

    showNotification() {
        const options = {
            body: "This is the body of the Notification",
            icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            dir: "ltr"
        };
        const notification = new Notification("Notification Demo", options);
    }

    render() {
        return (
            <div>
                <button onClick={this.showNotification}>
                    Click to show notification
        </button>
            </div>
        );
    }
}

export default SimpleNotification;
