// //Header Component...functional component...
// const Header = () => (
// <header>
//     <div className='header-wrapper'>
//      <h1>Welcome to 30 Days of React</h1>
//      <h2>Getting Started React</h2>
//      <h3>JavaScript Library</h3>
//      <p>Asabeneh Yetayeh</p>
//     <small>Oct 7, 2020</small>
//     </div>
// </header>
 
// )


//Header class component...
class Header extends React.Component {
    constructor(props){
        super(props)
    
    }
render () {
    return(
<header>
    <div className='header-wrapper'>
     <h1>Welcome to 30 Days of React</h1>
     <h2>Getting Started React</h2>
     <h3>JavaScript Library</h3>
     <p>Asabeneh Yetayeh</p>
    <small>Oct 7, 2020</small>
    </div>
</header>
)
   }
      }

//TechList functional component...
// const TechList = () => {
//     const techs = ['HTML', 'CSS', 'JavaScript']
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted
// }     

//TechList class component...
class TechList extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const techs = ['HTML', 'CSS', 'JavaScript']
        const techsFormatted =techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}

//Main functional component...
// const Main = () => (
//     <main>
//         <div className='main-wrapper'>
//             <p>Prerequisite to get started in react.js</p>
//             <ul>
//                 <TechList />
//             </ul>
//         </div>
//     </main>
// )

//Main class component...
class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
<main>
    <div className='main-wrapper'>
        <p>Prerequisite to get started in react.js:</p>

        <ul>
            <TechList />
        </ul>
    </div>
</main>

        )
    }
}


//Footer functional component...
// const Footer = () => (
//     <footer>
//         <div className='footr-wrapper'>
//             <p>Copyright 2023</p>
//         </div>
//     </footer>
// )

//Footer class component...
class Footer extends React.Component{
constructor(props){
    super(props)
}
  render(){
    return(
        <footer>
            <div className='footer-wrapper'>
                <p>Copyright 2023</p>
            </div>
        </footer>
    )
  }
}

//The App functional component (parent component)...
// class App = () => (
//     <div className='app'>
//     <Header />
//     <Main />
//     <Footer />
//     </div>
// )

//The App class component (parent component)...
class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='app'>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)