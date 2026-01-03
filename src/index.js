import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ToastContainer } from 'react-toastify'

// Styles
import './styles/fonts.css'
import './styles/index.css'
import './styles/Normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <ToastContainer />
        <Router>
            <App />
        </Router>
    </React.StrictMode>
)