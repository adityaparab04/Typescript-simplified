### Theory

- one can assign a type and value to the variable by separating it by colon.
  e.g.
  - let a: string = "Hello World";
  - let b: number = "8";
- Const values are not required to be specified with a type as it will get the assigned value type.
  - const name = "Aditya" // is same as
  - const name: string = "Aditya"
- Same like JS even TS has null and undefined as 2 different values and make sure to check for both
  - let x: undefined = undefined
  - let y: null = null
- The above two statements cannot be interchanged

  - let x: undefined = null // this doesn't work nor other way around and it's a bad practise to even assign undefined

- Array Type

  - array's can be assigned with a type by this `arr1 : number[] = [1, 2, 3]` . A colon and the datatype and then the symbol []
  - same like js we can append values to the constant arrays but we cannot modify them.

- Any Type

  - any can be assigned the same way colon and any `let var1 : any = 'string`
  - Same like JS where all the variables are any type
  - Never have any in your code, it could show your code smells. It doesn't give any auto complete or any protection.
  - JSON data, response data and parsed data is also any type since we never know how the received data is having which type.
  - Only use any when converting JS code to TS code but otherwise when writing the TS code from scratch never use any.

- Object Type

  - If a property is not assigned while declaring the object it cannot be added later in the object using TS
  - Manually type the properties with the type.
  - Declared same way use colon and use same object and separate it using comma or semi colon or a new line.
  - If you want to create an optional property with a specific type or undefined use a question mark.
    - So having a question mark helps you to identify a optional property for an object.
  - e.g.
  - `const person: {name: string; age: number, isProgrammer?: boolean}`

- Interface vs Types
  - Types
    - Always better to write types separately using type and the name of the object with all the properties. Otherwise it becomes to confusing.
    - Can be assinged to a variable
  - Interface
    - Interface can only be used with object so we cannot use `=` sign as well while assining. As the interface itself is something.
    - Both are interchangeable with objects but can only be used with objects and cannot be assigned with number or String.
