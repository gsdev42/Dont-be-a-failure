function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type); // create dom element
  domElement.innerHTML = reactElement.children; // set inner html of the dom element
  domElement.setAttribute("href", reactElement.props.href); // set href attribute of the dom element
  domElement.setAttribute("target", reactElement.props.target); // set target attribute of the dom element
  container.appendChild(domElement); // append the dom element to the container
  */
    
    //iss code ko modular way mai likhne ka way
    const domElement = document.createElement(reactElement.type); // create dom element
    domElement.innerHTML = reactElement.children; // set inner html of the dom element
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendchild(domElement); // append the dom element to the container

}

/*yeh wala content parse hoke niche wale mai convert hota hai
function App() {
  return (
  <div>
    <h1>Hello world</h1>
  </div>
  );
}
*/
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};
const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
