import { createContext} from "react";

const Context = createContext(null);

export default Context;



/**
 * On `ContextProvider.js` we'll import the context we initialized in the previous file. We'll also initialize the states we want to consume later on and update from our app's components. Finally, we return the context provider and with the `value` object we pass all the states and setState functions we want to consume later on.

The contextProvider is a HOC. A **higher order component or HOC** is similar to a higher order function in JavaScript (I have an article about that [here](https://gercocca.hashnode.dev/higher-order-functions-and-callbacks)). 

Higher order functions are functions that take other functions as arguments OR return other functions. React HOCs take a component as a prop, and manipulate it to some end without actually changing the component itself. You can think of this like wrapper components.
 */