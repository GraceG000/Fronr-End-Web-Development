//Accessing props in class components...
import React from 'react';
import ReactDOM from 'react-dom';

//class based component...
class Header extends React.Componnt{
    constructor(props){
        super(props)
    //the code inside the constructor runs before any other code...
    }
render(){
    return(
        <header>
            <div className='header-wrapper'>
                <h1>{this.props.data.welcome}</h1>
                <h2>{this.props.data.title}</h2>
                <h3>
                    {this.props.data.firstName} {this.props.data.lastName}
                </h3>
                <small>{this.props.data.date}</small>
            </div>
        </header>
    )
 }
}

/*cleaning the above code using destructuring. Destructuring reduces repetition...
class Header extends React.Component {
    constructor(props){
        super(props)
    
        //the code inside the constructor run before any other code...
    }

    render () {
        const {
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

*/

const App = () => {
    const data = {
        welcome:'Welcome to 30 Days of React',
        title:'Getting started with react',
        subtitle:'JavaScript Library',
        author: {
            firstName:'Nanase',
            lastName:'Sakura',
        },
        date: 'Oct 7, 2020',
    }
}

return(
    <div className='app'>
        <Header data={data} />
    </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App /> , rootElement)