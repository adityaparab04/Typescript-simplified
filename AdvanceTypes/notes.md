-   Const and Enums

    -   Can be defined by writing `as const`
    -   It helps to make everything inside as read only, instead of making separate type and marking everthing read only.
    -   We can use this to make arrays and objects actually constants and we cannot change their contents.
    -   e.g. const name = "Aditya" as const

-   Tuples

    -   Here the first value is key and second value is the value
    -   `type Tuple = [string, boolean]`
    -   They are hardcoded arrays of different types for every specific position. Types cannot be changed.
    -   useState hook in react uses tuple, first value is the state and second value is updator

-   Generics
    -   Generics determine the arguments type in a type, interface, function.
    -   It determines whether it's a generic function or not.
    -   We can overwrite the generics
