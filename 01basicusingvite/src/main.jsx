import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const username = "Pankaj_Kumar_dev";
const reactElement= React.createElement(
    'a',
    {href: "https://google.com",
     target: "_blank"},

     "click to visit google",
     username
    )

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

)
