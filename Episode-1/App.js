import React from "react";
import ReactDOM from "react-dom/client";




//  React.createElement => Object (created a react element(heading) which is an object)=> HTMLelement (render)

const heading = React.createElement( "h1" , { id: "heading"} , "Namaste React"); 

console.log(heading);   // return object 
const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);     


//  JSX is html or Xml like code 
// transpiled before it goes to js engine , it is done by parcel (Babel)

////  JSX =>React.createElement => Object (created a react element(heading) which is an object)=> HTMLelement (render)
const jsxheading=<h1 className="head" tabIndex="1">Namaste React with jsx </h1>; //ifyou are writing in multiple lines use()
console.log(jsxheading);




// React Fuctional Element 
const HeadingComponent = () => {
   < div id="container">
    return <h1>Namaste React Functional Component </h1>;
    </div>
};


