## 1.What is JSX, and why is it used?

#### Ans: JSX is stands for Javascript XML.It allows us to write HTML-like code inside React components, and we can also use JavaScript code inside it by using curly braces {}.JSX is used because it makes building user interfaces easier and more readable and because of JSX, we can build UI in a way that looks very similar to HTML, which makes the code easier to read and understand. Behind the scenes, JSX is converted into regular JavaScript, so the browser can understand it.

## 2.What is the difference between State and Props?

#### Ans: Props and State are both used to manage data in React, but they are different in how they work.Props (short for properties) are used to pass data from one component to another, Props follow a unidirectional data flow, which means data only moves in one direction — from parent to child.. Props are read-only, which means a component cannot change the props it receives.

#### On the other hand, State is used to manage data inside a component. State is mutable, meaning the component can update or change its own state using functions like setState or the useState hook. When state changes, the component re-renders automatically.

## 3.What is the useState hook, and how does it work?

#### Ans: In React, state is used to store dynamic data inside a component that can change over time. When the state changes, React automatically re-renders the component to update the UI.The useState hook is a built-in React hook that allows us to use state in functional components.The useState hook works by returning two values: the current state value and a function to update that state. For example, when we write const [count, setCount] = useState(0);, here count is the state variable, setCount is the function used to update the state, and 0 is the initial value.Whenever we call the update function like setCount, React updates the state and re-renders the component automatically.

## 4.How can you share state between components in React?

#### Ans: In React, state is usually local to a component, meaning it cannot be accessed directly by other components. If we want to share state between components, the most common way is by lifting the state up.Lifting state up means moving the state to the closest common parent component. Then the parent can pass the state down to child components using props. Since props follow unidirectional data flow, the parent controls the state and shares it with children

#### If components are deeply nested or we need to share state across many components, we can use the Context API to avoid prop drilling. In larger applications, state management libraries like Redux can also be used.So basically, we share state by lifting it to a common parent and passing it through props, or by using Context API for more complex cases.

## 5.How is event handling done in React?

#### Ans: In React, event handling is done using event handlers like onClick, onChange, onSubmit, etc. These handlers are written in camelCase and we pass a function inside curly braces {} to handle the event.For example, in a button we can write onClick={handleClick}. When the button is clicked, the handleClick function will be executed.If we need to pass a value to the function, we cannot write onClick={handleClick(5)} directly. Because if we do that, the function will execute immediately during rendering, not when the button is clicked.

#### So, to pass a value properly, we need to wrap the function inside another function like this:onClick={() => handleClick(5)}Here, we are passing an arrow function. This arrow function will only run when the button is clicked, and inside it we are calling handleClick with the value 5.So basically, we wrap the function to prevent it from executing immediately and to make sure it runs only when the event actually happens.
