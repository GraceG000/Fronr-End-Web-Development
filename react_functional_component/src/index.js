import React from 'react';
import ReactDOM from 'react-dom';
//importing an image into your application...
import CuteAnimeGirl from './images/cute-anime-girl.jpg';


// // React component syntax
// // it can be arrow function, function declaration or function expression
// const jsx = <tag> Content </tag>
// const ComponentName = () => {
//   return jsx
// }


// //Hexadecimal color generator...
// const hexaColor = () => {s
//   let str = '01234456789abcdef'
//   let color = ''
//   for(let i = 0; i < 6; i++){
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]

//   }
//   return  '#' + color;

//   }

// //to create random colors using the hexadecimal color generator above...
// const HexaColor = () => {
  
//   const bgColor = hexaColor()
//   const styles = {
//     height:'100px',
//     display:'flex',
//     'justify-content':'center',
//     'align-items':'center',
//     fontFamily:'Montserrat',
//     margin:'2px auto',
//     borderRadius:'5px',
//     width:'75%',
//     border: '2px solid black',    
//   }
// return (
//   <div style={styles}>
//     <h2>{bgColor}</h2>
//   </div>
// )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<HexaColor />, rootElement)

const rootElement = document.getElementById('root')

//creating a JSX element for the image...
const image = (
    <div>
     <img src={CuteAnimeGirl} alt="cute anime girl"/>
    </div>
)

const name = "Sakura Nanase"
const role = {
    job : "Junior Developer",
    location: "Tokyo, Japan",
}

const arrivalDate = "Joined on February 15, 2023"
const skills = "Skills"
const skillsList = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "Numpy", "Pandas", "Data Analysis", "MySQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"]
//treating the array, so it displays properly in the react UI...
const listFormatted = skillsList.map((skillsLists)=> <button>{skillsLists}</button>)
//creating my first functional component, header...Injecting data into the component...
const Header = () => (
<header>
    <div className="header_section">
     
     {image}
     <br/>
     <p>{name}</p>
     <p>{role.job} {role.location}</p>
     
    </div>
</header>
)



//creating another functional component...Component names should always start with a capital letter...
const Main = () => (
    <main>
        <div className="main_section">
        <p>{skills}</p>
      <div className="btn-group">        
      
     <p> {listFormatted} </p>

      </div>
        </div>
    </main>
)

//creating another functional component...
const Footer = () =>  (
    <footer>
        <div className="footer_section">
        <p>{arrivalDate}</p>
        </div>
    </footer>
)

//creating the parent functional component so that all the functional components can be rendered...
const App = () => (
    <div className="container mt-3">
        <Header />
        <Main />
        <Footer />
    </div>
)

ReactDOM.render(<App />, rootElement)