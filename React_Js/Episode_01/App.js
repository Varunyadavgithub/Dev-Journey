// Structure - 1
// {
//   <div id="container">
//     <h1>I am heading 1</h1>
//     <h1>I am heading 2</h1>
//   </div>
// }

// const Structure01 = React.createElement("div", { id: "container" }, [
//   React.createElement("h1", {}, "I am heading 1"),
//   React.createElement("h1", {}, "I am heading 2"),
// ]);
// console.log(Structure01);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Structure01);

// Structure - 2
// {
//   <div id="container">
//     <div id="container1">
//       <h1>I am heading 1</h1>
//       <h2>I am heading 2</h2>
//     </div>
//     <div id="container2">
//       <h1>I am heading 1</h1>
//       <h2>I am heading 2</h2>
//     </div>
//   </div>
// }

const Structure02 = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "container1" }, [
    React.createElement("h1", {}, "I am heading 1"),
    React.createElement("h2", {}, "I am heading 2"),
  ]),
  React.createElement("div", { id: "container2" }, [
    React.createElement("h1", {}, "I am heading 1"),
    React.createElement("h2", {}, "I am heading 2"),
  ]),
]);
console.log(Structure02);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Structure02);
