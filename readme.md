# Interview Questions Answer

# 1. What is TypeScript, and how is it different from JavaScript?
## Ans: TypeScript is an object-oriented programming language developed by Microsoft Corporation, whereas JavaScript is the programming language for the web. TypeScript is an open-source language to build large-scale web apps, whereas JavaScript is a server-side programming language that helps to develop interactive web pages.

# 2. Can you explain the difference between "interface" and "type" in TypeScript?
## Ans: // One major difference between type aliases vs interfaces are that interfaces are open and type aliases are closed. This means you can extend an interface by declaring it a second time. // In the other case a type cannot be changed outside of its declaration.

# 3. Can you give an example of how to use generics in TypeScript?
## Ans: To use generics, you need to use angular brackets and then specify a type variable inside them. Developers generally use T , X and Y . But it can be anything depending upon your preference. You can then assign the same variable name as the type to the parameter of the function.

# 4. What is the difference between an "unknown" and "any" type in TypeScript?
## Ans. We cannot assign unknown to anything but itself or any , while we can assign any to anything. As you can see, these constraints make sure that we verify the unknown value before working with it, which is important to reduce the possibility of runtime errors.

# 5. Can you give an example of how to use enums in TypeScript?
## Ans. Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript. Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

# 6. What is the "as" keyword used for in TypeScript?
## Ans. The as keyword is a type assertion in typescript. Type assertion is used such that we can set the data type of the variable on our own and tells the compiler not to infer it on its own. Type assertion is used to tell the compiler that we want to treat any as a number, or string.

# 7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
## Ans: TypeScript is a strongly-typed language, which means that variables and expressions have specific types. Type guards are used to narrow down the type of a variable within a certain block of code.
