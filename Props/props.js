
/*Props are a way to pass data from one component to another in React.
You can pass props from a parent component to a child component by 
adding attributes to the child component's JSX tag.*/

// ParentComponent.jsx

import ChildComponent from './ChildComponent';

function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}


//Accessing Props: Inside the child component, props are accessed as an object.

// ChildComponent.jsx

function ChildComponent(props) {
  return <p>Name: {props.name}, Age: {props.age}</p>;
}




//Immutability of Props

/*Immutable: Props are immutable, 
which means they cannot be changed by the child component. 
They are read-only.*/

//Types

/* 
Props can be any type of data 
- strings, numbers, arrays, objects, functions, etc.
*/



//Default Props

/*
You can also define default values for props in case 
they are not passed from the parent component.
*/ 

function ChildComponent({ name = 'Default Name', age = 0 }) {
  return <p>Name: {name}, Age: {age}</p>;
}


/*
In essence, props are essential for 
passing data between React components, 
enabling them to be dynamic and reusable. 
They form a fundamental part of React's component architecture.
*/