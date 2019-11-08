1. What problem does the context API help solve?

    Context API allows the application of state to be passed between components which helps developers from the confusing case of "prop drilling."

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are how we determine what our information is going to do when called upon. It can store the major functions used throughout the application, like axios calls (data collection), and be readily used throughout the component library. 

    Reducers determine how the state will be affected by a given action. It can give you constant updates on how the machine is taking in information, loading, and errors. 4

    The store is the central location for state control. Actions and reducers can influence the state from there. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is stored locally and the application state is used with prop drilling. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is middleware that handles asynchronous operations inside our action-creators. It helps with the flow of those action creators. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like using redux because it provides you with a central location for state management. If a component needs to adjust any type of of state, we can use MSTP to pick out which state we want to adjust within the component. 

