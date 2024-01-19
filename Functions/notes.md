- Defining Functions

  - To define function in ts with specific types you have to pass parameters with the colon: and types.
  - No need to declare a return type which is done after the parameter with a colon and type.
  - Usually if typescript infers something always go with the inference.
  - TS looks at the structure of the object passed to the function so that's why you can add the additional properties declaring it in separate variable.

- void functions

  - function without any return type, automatically TS understands it as a void type. No need to declare it as a void return type when declaring
  - different from javascript where void functions are undefined.
  - if you want an undefined return type then specifically return it as an undefined for a void function.

- Optional parameters

  - give a question mark before the colon when sending the parameters. So when passing the arguments you can skip the optional parameter.

- destructuring params

  - destructring same like JS but use the type and optional parameter

- rest params

  - use spread operator and then give colon and mention type and an array symbol `[]` as the spread operator works on the array values.
  - `function sum (...nums: number[]){ return }`

- callback function as a param
  - define the parameter function with the parameter in that callback function and mention the type and return type.
  - you can also define a separate type for the call back function separately and pass it using f()
