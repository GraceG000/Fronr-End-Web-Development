//destructuring class components to make the code cleaner...
import React from 'react';
import ReactDOM from 'react-dom';

//class based component...
class Header extends React.Component{
    constructor(props){
        super(props)
    }
render(){

    const{
        welcome,
        title,
        subtitle,
        author: {firstName, lastName},
        date,
    } = this.props.data

    return(
        <header>
        <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
            {firstName} {lastName}
        </p>
        <small>{date}</small>
        </div>
        </header>
    )
  }
}

//class-based component...
class TechList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {techs} = this.props
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}

//class-based component...
class Main extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    return (
        <main>
            <div className='main-wrapper'>
                <p>Prerequisite to get started with react.js:</p>
            <ul>
                <TechList techs={this.props.techs} />
            </ul>      
            </div>
        </main>
    )
}
}

//Footer class component...
class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <footer>
                <div className='footer-wrapper'>
                    <p>
                        Copyright {this.props.date.getFullYear()}
                    </p>
                </div>
            </footer>
        )
    }
}

class App extends React.Component{
    render(){
        const data ={
            welcome:'Welcome to 30 Days of React',
            title:'Getting Started with React',
            subtitle:'JavaScript Library',
            author:{
                firstName: 'Asabeneh',
                lastName: 'Yetayeh',
            },
            date: 'Oct 7, 2020',
        }
    const techs = ['HTML', 'CSS', 'JavaScript']

    return (
        <div className='App'>
            <Header data={data} />
            <Main techs={techs} />
            <Footer date={new Date()} />
        </div>
    )
}
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)