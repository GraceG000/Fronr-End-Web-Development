import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";//importing a function...

const rootElement = document.getElementById('root')
const title = 'SUBSCRIBE'
const instruction = 'Sign up with your email address to receive news and updates.'
const copyRight = 'Copyright 2023'

//calling the app function...
const signUp = App()


const header =(
  <header className="header-wrapper">
    <h1>{title}</h1>
    <br/>
    <br/>
    <h3>{instruction}</h3>
  </header>
)

//Injecting the form function into the jsx Element 
const main =(
  <main className="main-wrapper">
    <div className="container">
      {signUp}
    </div>
  </main>
)

const footer=(
  <footer>
    <p>{copyRight}</p>
  </footer>
)
const app =(
  <div>
    {header}
    {main}
    {footer}
  </div>
)

ReactDOM.render(app, rootElement)