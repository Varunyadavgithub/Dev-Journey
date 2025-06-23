## Arrays in TypeScript

In TypeScript, arrays can be defined with specific types to ensure that all elements in the array adhere to the specified type. Here are the different ways to define arrays:

### Method 1: Using Square Brackets (`[]`)

- You can specify the type of elements in the array using square brackets (`[]`).
- Example:
  ```typescript
  let numbers: number[] = [1, 2, 3]; // Array of numbers
  let names: string[] = ["Alice", "Bob"]; // Array of strings
  ```

### Method 2: Using `Array<type>` Syntax

- This is an alternative way to declare arrays using `Array<type>`.
- Example:
  ```typescript
  const arr: Array<string> = []; // An empty array of strings
  const mixedArr: Array<string | number> = ["Varun", 41]; // Array with strings and numbers
  ```

### Tuples in TypeScript

- A tuple is a fixed-length array where each element can have a different type.
- Example:
  ```typescript
  const coordinates: [number, number, number] = [1, 2, 3]; // Tuple with three numbers
  ```

---

## `type` Keyword in TypeScript

The `type` keyword allows you to create custom types, also known as **type aliases**. This makes code more readable and reusable by giving descriptive names to complex or repetitive types.

### Example: Creating a Custom Type

```typescript
type UserName = string | number; // Custom type that can be a string or number

let user1: UserName = 123; // Valid
let user2: UserName = "Alice"; // Valid
```

## Type Aliases for Specific Values

Type aliases can also be used to create types that represent specific string or numeric values.

### Example: Theme Modes

```typescript
type ThemeMode = "light" | "dark";
const mode: ThemeMode = "light";
```

Here, `ThemeMode` is a union type that can only take the values `"light"` or `"dark"`. This ensures strict type checking for valid theme modes.

### Benefits of Using `type`

1. Reduces redundancy by reusing types.
2. Improves code readability and maintainability.
3. Allows for complex type combinations.
4. Type aliases make code readable and enforce strict typing for specific use cases.

---