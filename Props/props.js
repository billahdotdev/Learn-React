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
    return (
        <p>
            Name: {props.name}, Age: {props.age}
        </p>
    );
}

/*
In essence, props are essential for
passing data between React components,
enabling them to be dynamic and reusable.
They form a fundamental part of React's component architecture.
*/
