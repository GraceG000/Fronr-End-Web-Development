import React from 'react';
import ReactDOM from 'react-dom';
import CuteAnimeGirl from './images/cute-anime-girl.jpg'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

//Header Component...
// const Header = (props) => {
//   return(
//     <header>
//       <div>
//         <h1>{props.data.welcome}</h1>
//         <h2>{props.data.title}</h2>
//         <h3>{props.data.subtitle}</h3>
//         <p>
//           {props.data.author.firstName} {props.data.author.lastName}
//         </p>
//         <small>{showDate(props.data.date)}</small>
//       </div>
//     </header>
//   )
// }

/**
 * 
 * Destructuring props...
 * 1. Step by step destructuring...
 * 
 * const Header = (props) => {
 * const data = props.data
 * const{welcome, title, subtitle, author, date} = data
 * const {firstName, lastName} =author
 * 
 * return(
 * <header>
 * <div>
 * 
 * <h1>{welcome}</h1>
 * <h2>{title}</h2>
 * <h3>{subtitle}</h3>
 * 
 * <p>
 * {firstName} {lastName}
 * </p>
 * 
 * <small>{showDate(date)}</small>
 * </div>
 * </header>
 * )
 * }
 * 
 * 
 * 
 * 2. Destructuring in one line...
 * const Header = (props) => {
 *  const data = props.data
 * 
 * const {
 * welcome,
 * title,
 * subtitle,
 * author: {firstName, lastName},
 * date,
 * }=data
 * 
 * return (
 * <header>
 * <div>
 * <h1>{welcome}</h1>
 * <h2>{title}</h2>
 * <h3>{subtitle}</h3>
 * <p>
 * <small>{showDate(date)}</small>
 * </p>
 * </div>
 * </header>
 * )
 * }
 * 
 * 3. Destructuring the props inside the parenthesis
 * 
 * const Header = ({
 * data: {
 * welcome,
 * title,
 * subtitle,
 * author: {firstName, lastName},
 * date,
 * },
 * }) => {
 * 
 * return (
 * <header>
 * <div>
 * <h1>{welcome}</h1>
 * <h2>{title}</h2>
 * <h3>{subtitle}</h3>
 * <p>
 *     {firstName} {lastName}
 * </p>
 * <small>{showDate(date)}</small>
 * </div>
 * </header>
 * 
 * )
 * 
 * }
 * 
 */
//Header Component...
const Header = ({
data: {
  welcome,
  title,
  subtitle,
  author:{firstName, lastName},
  date,
},
}) => {
  return(
    <header>
      <div>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

//TechList Component...
const TechList = ({techs}) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

//User Card Component...
const UserCard = ({user: {firstName, lastName, image}}) => (
  <div>
    <img src={image} alt={firstName} />
   <h2>
    {firstName}
    {lastName}
    </h2> 
  </div>
)

//A button component...
const Button = ({ text, onClick, style}) =>(
  <button  className= "btn btn-info" style = {style} onClick={onClick}>{text}</button>
)

//CSS styles in JavaScript Object...
const buttonStyles = {
  backgroundColor : '#61dbfb',
  padding:10,
  border:'none',
  borderRadius: 5,
  margin:3,
  cursor: 'pointer',
  fontSize: 18,
  color:'white',
}

//Main component...
const Main = ({user, techs, greetPeople, handleTime}) => (
  <main>
    <div>
      <p> Prerequisite to get started react.js:</p>

      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

//Footer component...
const Footer = ({ copyRight }) => (
  <footer>
    <div>
      <p>Copright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

//The App, or the parent or the container component...
//Functional Component... 
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days of React',
    title:'Getting Started with React',
    subtitle:'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), //date needs to be formatted to a human readable format...
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  //copying the author from data object to user variable using the spread operator...
  const user = {...data.author, image: CuteAnimeGirl}

  console.log("USER OBJECT",user)

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  const greetPeople = () => {
    alert('Welcome to 30 Days of REact Challenge, 2023')
  }

  return (
    <div className="container">
      <Header data={data} />
      <Main
      user={user}
      techs={techs}
      handleTime={handleTime}
      greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
