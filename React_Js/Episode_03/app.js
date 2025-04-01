import React from "react";
import ReactDOM from "react-dom/client";

// 1.) Without JSX
const normalHeading = React.createElement(
  "h1",
  { id: "heading" },
  "I am Heading (Normal)."
);
// console.log(normalHeading); //React element (object)

// 2.) With JSX
const jsxHeading = <h1>I am Heading (JSX).</h1>;
// console.log(jsxHeading); //React element (object)
// Babel => JSX => Transpilation => React element

// Multiline JSX
const multilinejsx = (
  <div>
    <h1>I am Heading (JSX).</h1>
  </div>
);

// #Difference between normal and JSX
const age = 38;
const jsxexample = (
  <div>
    <h1 className="heading">The age is {age}</h1>
  </div>
);

// 3.) Component
// Class based -> Old way to writing the react code.
// Function based -> New way to writing the react code.

const HeadingComponent = () => <h1>I am Component.</h1>;
const HeadingComponent2 = () => {
  return <h1>I am Component 2.</h1>;
};
const HeadingComponent3 = () => (
  <div className="container">
    <HeadingComponent />
    <HeadingComponent />
    <HeadingComponent />
    {HeadingComponent2()} {/*call a component*/}
    <h1>I am Component 3.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(normalHeading);
// root.render(jsxHeading);
// root.render(multilinejsx);
// root.render(jsxexample);
// root.render(<HeadingComponent/>);
// root.render(<HeadingComponent2/>);
root.render(<HeadingComponent3 />);
