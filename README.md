# OTP (One-Time Password) scam ! PREVENTION !

This project provides a secure OTP-based validation system to protect users from fraudulent activities, such as phishing attacks or unauthorized transactions. By integrating Twilio's messaging API and Firebase Firestore, this system helps send OTPs through SMS and verifies them before processing sensitive actions like payments.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note:** This is a one-way operation. Once you eject, you can’t go back!

## Firebase Setup

To set up Firebase Firestore, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Set up Firestore Database in the project.
3. Create a `firebaseConfig.js` file in your project directory and paste your Firebase configuration:

   ```js
   import firebase from 'firebase/app';
   import 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();

   export default db;
   ```

## Twilio Setup

1. Sign up for a [Twilio account](https://www.twilio.com/).
2. Create a new project, and get your credentials: `Account SID`, `Auth Token`, and `Twilio Phone Number`.
3. Add them to a `.env` file in your root directory:

   ```bash
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   PORT=8000
   ```

## Running the Backend

To start the backend server, run:

### `node server.js`

Runs the backend server on [http://localhost:8000](http://localhost:8000). Ensure your `.env` file is set up correctly with the Twilio credentials.

## Sending OTP via Twilio

In `PaymentForm.js`, replace the placeholder phone number with your target number to send OTP messages:

```js
const sendMessage = async (message) => {
  try {
    const otp = generateOTP();
    message = message + "****** LINK";
    const response = await axios.post('http://localhost:8000/send-message', {
      phoneNumber: '+91YOUR_PHONE_NUMBER',
      message,
    });
    handleStoreOtp(otp);
    navigate('/pin', { state: { otp } });
  } catch (error) {
    if (error.response) {
      console.error('Error sending message:', error.response.data);
      alert(`Failed to send message: ${error.response.data.error}`);
    } else {
      console.error('Error sending message:', error.message);
      alert('Failed to send message. Please try again.');
    }
  }
};
```

Ensure your Twilio account has sufficient credits to send SMS.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Demo Video

Check out the project in action here: [Demo Video Link](https://placeholder.com/video-link)

---

Let me know if any more updates are needed for the `README.md`.
