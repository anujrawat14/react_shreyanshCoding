# React Notes - Components & Props

## Components

* Components are reusable pieces of UI in React.
* They help divide the application into smaller, manageable parts.
* Each component is responsible for rendering a specific part of the user interface.

## Creating Components

* A component is created in a separate `.jsx` file.
* Components are exported using `export default` and imported wherever they are needed.
* Component names should always start with a capital letter.

## Why Use Separate Component Files?

* `App.jsx` is generally used as the root component of the application.
* Instead of writing all the UI inside `App.jsx`, create separate components (e.g., `Card.jsx`).
* This keeps the code organized, readable, and easier to maintain.
* Components can be reused multiple times with different data.

## Props

* Props (Properties) are used to pass data from a parent component to a child component.
* Props are read-only and should not be modified inside the child component.
* A child component receives props as an object.

## Accessing Props

* Props can be accessed using the `props` object.
* Destructuring can be used to directly extract required values from the props object.
* Destructuring makes the code cleaner and easier to read.

## Props Drilling

* Props drilling is the process of passing data from a parent component to a child component through props.
* If multiple nested components need the same data, the props may need to be passed through intermediate components.
* Excessive props drilling can make code difficult to manage, which is why state management solutions (like Context API or Redux) are used in larger applications.

## Benefits of Components

* Code reusability.
* Better code organization.
* Easier maintenance.
* Improved readability.
* Simplifies application development by breaking the UI into smaller parts.
