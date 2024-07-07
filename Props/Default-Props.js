// Default Props

/*
You can also define default values for props in case
they are not passed from the parent component.
*/

function ChildComponent({ name = 'Default Name', age = 0 }) {
    return (
        <p>
            Name: {name}, Age: {age}
        </p>
    );
}
