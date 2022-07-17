import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import HOCContext from './pf/HOCContext';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAIUSLaLrnuvmsUHvagS8-7Xt4nEk4MSLY',
  authDomain: 'react-37750.firebaseapp.com',
  projectId: 'react-37750',
  storageBucket: 'react-37750.appspot.com',
  messagingSenderId: '750530617092',
  appId: '1:750530617092:web:a5712522032f2ee50cfa51',
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode>
    <ChakraProvider> */}
    <HOCContext>
      <App />
    </HOCContext>
    {/* </ChakraProvider>
  </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
