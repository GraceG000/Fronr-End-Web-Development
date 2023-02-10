import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//importing an image...
import CuteAnimeGirl from './images/cute-anime-girl.jpg';

/**
 * React Component Syntax...
 * it can be arrow function, function declaration or function expression...
 * 
 * const jsx = <tag> Content </tag>
 * const CompnentName = () => {
 * return jsx
 * } 
 * 
 */

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started With React'
const subtitle = 'JavaScript Library'
const firstName = 'Asabeneh'
const lastName = 'Yetayeh'
const date = 'February 10, 2023'
const author ={
  firstName:'Sakura',
  lastName: 'Nanase',
}
const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge =(
<p>
  {' '}
  {author.firstName} {author.lastName} is {age} years old
</p>
)

//JSX element, header...
const header = () => {
  return (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {firstName} {lastName}</p>
      <small> Datea: {date}</small>
    
    </div>
  </header>

)
  }

//React Component...
const Header = () => {
  return header
}

// //Or we can just return the JSX...

// const Header = () => {
//   return (
//     <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days of React</h1>
//       <h2>Getting Started With React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Instructor: Asabeneh Yetayeh</p>
//       <small>February 10, 2023</small>
//     </div>
//   </header>
//   )
// }

//Even the above code can be written like this...
//Explicitly returning the JSX...
/**
 * const Header = () => (
 *   <header>
     <div className='header-wrapper'>
       <h1>Welcome to 30 Days of React</h1>
       <h2>Getting Started With React</h2>
       <h3>JavaScript Library</h3>
       <p>Instructor: Asabeneh Yetayeh</p>
      <small>February 10, 2023</small>     </div>
   </header>
 * )
 */

//User Card Component...
const UserCard = () => {
  <div className='user-card'>
    <img src={CuteAnimeGirl} alt='cute anime girl'/>
    <h2>Sakura Nanase</h2>
  </div>
}   

//TechList Component...
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

//main component...injecting components into JSX Elements...
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started {' '}
      <strong><em>react.js</em></strong>
      :
      </p>
    <ul>
      <TechList />
    </ul>
    <UserCard />
    {personAge}
    </div>
  </main>
)

//footer component...
const Footer = () => (
  <div className='footer-wrapper'>
<p>Copyright 2023</p>
  </div>
)


//styling the button...
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0,255,0)',
  border:'none',
  borderRadius:5,
}

//if we pass a number without unit as CSS value, it is considered as px...
//let's create a button component...it is a dumb component, because it does not take any parameters and we cannot change the action text dynamically...
//we need to pass props to the button, to change the value dynamically
const Button = () => <button style={buttonStyles}>action</button>

//another functional component, which displays a random hexidecimal number...
//Hexademcimal color generator...
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for(let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>


//The app, or parent or the container component...
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
    <HexaColor />
    <Button />
  </div>
)

//rendering the Header component...
const rootElement = document.getElementById('root')
//we render the JSX element using the ReactDOM package...
ReactDOM.render(<App />, rootElement)