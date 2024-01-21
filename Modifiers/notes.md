- Union modifiers

  - assigning multiple types to the variable using `|` a `with a single pipe symbol instead of 2 which is a regular or operator`
  - can also be assigned a specific value for type if those are the only type values you need.
  - You can declare type inside a type which is a union of different types.

- Intersection modifier

  - Can be done using `&`.
  - Usually done when you want to add things to a specific type which is already defined.
  - If you want to do this with interface you can do it using `extends` keyword.
  - Also can be done with a combination as well.
  - Can be done with multiple not limited to 2
  - Intersection doesn't work with primitive types.

- Read Only

  - value cannot be modified.
  - assigned using `readonly` before the data type or variable.
  - should be used only when you don't want it to not be manipulated.

- keyof

  - keyof get's the key of the Object
  - will be passed inside a function with the key of the Type

- typeof

  - can pass the variable or the function name and gives exact typeof that variable or function
  - can be used using keyword typeof and can be stored in type

- index
  - to give keys a default type hvaing that specific type
  - passed in []
