//importing react and react-dom package...
import React from "react";
import ReactDOM from "react-dom";
import CuteAnimeGirl from "./images/cute-anime-girl.jpg"; //importing an image from the image folder in the src folder...

//finding an html element by its id...
const rootElement = document.getElementById("root");
const welcome = "Welcome to my first react app XD";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};

const date = "February 9, 2023";

//a JSX element, header...data injection demonstration...
const header = (
  <header>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>
      Instructor: {author.firstName} {author.lastName}
    </p>
    <p>Student: Grace Ghansah</p>
    <small>Date: {date}</small>
  </header>
);

//importing media objects in react...first let's create an image JSX element...
const user = (
  <div>
    <img src={CuteAnimeGirl} alt="cute anime girl" />
  </div>
);

const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);
//another JSX element, main...
const main = (
  <main>
    <p>Prerequisite to get started react.js</p>
    <ul>{techsFormatted}</ul>
    {user}
  </main>
);

const copyRight = "Copyright 2023";

//another JSX element, footer...
const footer = (
  <footer>
    <p>{copyRight}</p>
  </footer>
);

//another JSX element, app, a container or a parent...injecting all the data in header, main and footer into the app JSX element...
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

//rendering the JSX element, so that it shows up on the webpage...
ReactDOM.render(app, rootElement);

//another way to render all the JSX elements without the need for injecting data is...
//ReactDOM.render([header, main, footer], rootElement)
