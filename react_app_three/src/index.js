import React from 'react';
import ReactDOM from 'react-dom';
import CuteAnimeGirl from "./images/cute-anime-girl.jpg"; 
const rootElement = document.getElementById("root")

const name = "Sakura Nanase"
const role = "Software Developer, Japan"
const date = "Joined on February 2, 2023"
const skills = "Skills"

const employee = (
  <img src={CuteAnimeGirl} alt="cute anime girl"/>
);

const header =(
  <div>
  <header>
    {employee}
    <h2>{name} <ion-icon name="checkmark-circle"></ion-icon></h2>
    <small>{role}</small>
  </header>
  </div>
);

const bod = (
  <div>
 <main>
     <h3>{skills}</h3>   
     <br/>
     <button className="btn btn-info">HTML</button>
     <button className="btn btn-info">CSS</button>
     <button className="btn btn-info">Sass</button>
     <button className="btn btn-info">JS</button>
     <button className="btn btn-info">React</button>
     <button className="btn btn-info">Redux</button>
     <button className="btn btn-info">Node</button>
     <button className="btn btn-info">MongoDB</button>
     <button className="btn btn-info">Python</button>
     <button className="btn btn-info">Flask</button>
     <button className="btn btn-info">Django</button>
     <button className="btn btn-info">Numpy</button>
     <button className="btn btn-info">Pandas</button>
     <button className="btn btn-info">Data Analysis</button>
     <button className="btn btn-info">MYSQL</button>
     <button className="btn btn-info">GraphQL</button>
     <button className="btn btn-info">Gatsby</button>
     <button className="btn btn-info">Git</button>
  </main>
  </div>
);

const footer = (
  <div>
  <footer>
    {date}
  </footer>
  </div>
);

const app = (
  <div className="container">
    {header}
    {bod}
    {footer}
  </div>
);

ReactDOM.render(app, rootElement)