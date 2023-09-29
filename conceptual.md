### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
- Callbacks, Promises, Asyn and Await

- What is a Promise?
- A promise represents a value in Javascript that might not be available yet but will be available in the future. A promise can either be pending, fufilled or rejected. We uses these for network request and information that might take some time to complete.

- What are the differences between an async function and a regular function?
- an async function you can pass in an await funtion that will allow the rest of the code to run while the promise awaits to get resolved. This function is asyncronous while a regular function is syncronous by funtion and runs line by line.

- What is the difference between Node.js and Express.js?
- Node.js allows you to write javascript code on the server side while Express.js is a framework used within Javascript node.js. They are used together to help write server side code. ts the same relationship as Python and Flask.

- What is the error-first callback pattern?
- This just basically works during some sort of asyncronous operation by first passing the error in the callback function before other code to easily check if their are errors for the function.

- What is middleware?
- This runs between the communication between client and server. Liek with the app.use(json) that we completed. This ensures that between communication from server and client it will translate this in the middle fo the opertaion gracefully.

- What does the `next` function do?
- this passes control from one middle ware function to the next allowing you to control the flow of the desired code.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
- first off it would be better to send all the awaits together to make this a faster function. Also i am not seeing and error handeling and the names are not specific within the naming convention

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```
