/*Destructuring Props
Using Destructuring: Alternatively, 
you can destructure props directly in the function signature for cleaner code.
*/


// ParentComponent.jsx

import ChildComponent from './ChildComponent';

function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}


// ChildComponent.jsx

function ChildComponent({ name, age }) {
  return <p>Name: {name}, Age: {age}</p>;
}