import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const randomNotification = () => {
  const games = {
    name: 'test',
    author: 'test-auth'

  };

  const notifTitle = games.name;
  const notifBody = `Created by ${games.author}.`;
  const notifImg = `/logo192.png`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}


Notification.requestPermission().then((result) => {
  console.log(result);
  if (result === 'granted') {
    console.log('granted');
    randomNotification();
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
