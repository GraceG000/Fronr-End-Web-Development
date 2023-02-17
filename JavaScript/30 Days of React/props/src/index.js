import React from 'react';
import ReactDOM from 'react-dom';

//function syntax...

/**
 * const getUserInfob= (firstName, lastName, country) => {
 * return `${firstName} ${lastName}. Lives in ${country}.
 * }
 * 
 * Calling functions...
 * getUserInfo('Nanase', 'Sakura', 'Japan')
 */


 // component syntax...
 
 // Component names should start with a capital letter...
 const User = (props) => {
 return(
  <div>
  <h1>
      {props.firstName}
      {props.lastName}
      </h1>
      <small>{props.country}</small>
       </div>
  )
  } 
 
  //calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country...
  <User firstName = 'Nanase' lastName = 'Yetayeh' country='Finland' />

  //A button component...
  const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


  //A header component...
  const Header = (props) => {
    console.log(props)

  return(
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )  
  }

  //Age Component...with props...
  const Age = (props) => <div>The person is {props.age} years old.</div>
  
  //Weight component...with props...
  const Weight = (props) => (
    <p>The weight of the object on earth is {props.weight}</p>
  )

  const Status = (props) => {
    //ternary operator to check the status of the person...
    let status = props.status ? 'Old enough to drive' : 'Too young for driving'
    return <p>{status}</p>
  }

  // const Skills = (props) => <ul>{props.skills}</ul>
  const Skills = (props) => {
    let id = 1;
    const skillList = props.skills.map((skill)=><li key={id++}>{skill}</li>)
    return <ul>{skillList}</ul>
  }
   
  const Object = (props) => {
    return(
      <main>
        <div>
          <h2>{props.data.welcome}</h2>
          <h3>{props.data.title}</h3>
          <h4>{props.data.subtitle}</h4>
          <h4>{showDate(props.data.date)}</h4>
        </div>
      </main>
    )
  }

   const showDate = (time) =>{
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
    return ` ${month} ${date} ${year}`
   }

  //The app, or the parent component...
  //functional component...
  const App = () => {

    const welcome= "Welcome to 30 Days of React"
    const title = "Getting Started with React"
    const subtitle = "JavaScript Library"
    const firstName = "Asabeneh"
    const lastName = "Yetayeh"
 

    let currentYear = 2020
    let birthYear = 1820
    const age = currentYear - birthYear
    const gravity = 9.81
    const mass = 75
     const skills = ['HTML', 'CSS', 'JavaScript']
     let status = age => 18

     const data = {
      welcome:'This is a property of the data object',
      title:'This is another property of the data object',
      subtitle:'This is also a property of the data object',
      date: new Date(),
     }

     const sayHi = () => {
      alert('Hi')
     }

     const greetPeople = () =>{
      alert('Welcome to 30 Days of React Challenge, 2023')
     }

     const handleTime = () => {
      alert(showDate(new Date()))
     }

    return(
      <div className = 'app'>
        <Header 
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        
        />
       <Age
        age={age}
        />
       <Weight 
       weight={gravity * mass} 
       />

       <Status 
       status={status}
       />

      <Skills
       skills={['HTML', 'CSS', 'JavaScript']} 
      />

      <Object data={data}/>

      <Button text='Say Hi' onClick={() => alert('Hi')} />
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
      <Button text='show time' onClick={handleTime} />
      </div>
    )
  }
  //['HTML', 'CSS', 'JavaScript']
  const rootElement = document.getElementById('root')
  ReactDOM.render(<App />, rootElement)