import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './style.css'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // path to the aws-exports.js file

// Configure AWS Amplify with the aws-exports.js settings
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root')) // Create a root

root.render(
        <App />
)
