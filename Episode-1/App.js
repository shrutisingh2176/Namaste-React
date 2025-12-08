
/*const heading = React.createElement( "h1" , { id: "heading"} , "Hello World from React"); // it create an object h1 here

console.log(heading);   // return object 
const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);    // this render method take the object and put it up 
    // and convert it into heading tag and put i up on the dorm */









//HOW TO CREATE NESTED ELEMENT IN REACT 
/*
 <div id="parent">
      <div id = "child">
         <h1> Im h1 tag </h1>
      </div>
 </div>
*/

const parent = React.createElement( 
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement("h1", {} , "I'm an h1 tag")
    )
     
);
 const root = ReactDOM.createRoot(document.getElementById("root")); 

  root.render(parent);
  