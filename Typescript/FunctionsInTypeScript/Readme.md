## Functions in TypeScript

Functions in TypeScript are strongly typed, allowing you to define parameter and return types explicitly. Here's a detailed guide on how to work with functions in TypeScript:

---

### Example 1: Basic Function with Parameters

Define a function with parameter types. The return type is inferred.

```typescript
const func = (a: number, b: number) => {
  console.log(a, b);
  return a * b; // Return type inferred as number
};
```

---

### Example 2: Explicit Return Type

Specify the return type explicitly using `: type`.

```typescript
const func = (a: number, b: number): number => {
  console.log(a, b);
  return Number(a * b); // Ensures the return value is a number
};
```

---

### Example 3: Using `type` for Function Types

Use `type` to define a reusable function signature.

```typescript
type FuncType = (n: number, m: number) => number;

const func: FuncType = (n, m) => {
  console.log(n, m);
  return n * m;
};
```

---

### Example 4: Optional Parameters

Use `?` to make a parameter optional.

```typescript
type FuncType = (n: number, m: number, l?: number) => number;

const func: FuncType = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  return n * m * l;
};

func(25, 30); // l is optional
```

---

### Example 5: Default Parameters

Provide a default value for optional parameters.

```typescript
type FuncType = (n: number, m: number, l?: number) => number;

const func: FuncType = (n, m, l = 20) => {
  return n * m * l; // If l is not provided, it defaults to 20
};

func(25, 30); // Uses default value for l
```

---

### Example 6: Rest Parameters

Use the `...` operator to accept multiple arguments.

```typescript
const func = (...n: number[]) => {
  return n; // Returns an array of numbers
};

func(25, 30, 45, 76, 84, 39); // Handles multiple arguments
```

#### Using `type` with Rest Parameters

```typescript
type FuncType = (...n: number[]) => number[];

const func: FuncType = (...n) => {
  return n;
};

func(25, 30, 45, 76, 84, 39);
```

---

### Example 7: Named Function with Explicit Type

You can define a named function with a type alias for consistency.

```typescript
function lol(n: number): number {
  return 0; // Always returns 0
}
```

#### Using `type` with Named Functions

```typescript
type FuncType = (n: number) => number;

const lol: FuncType = function lol(n) {
  return 0;
};
```

---

### Key Points

1. **Parameter Types**: Always define parameter types for clarity.
2. **Return Types**: Use explicit return types for complex functions.
3. **Optional Parameters**: Add `?` to make a parameter optional.
4. **Default Parameters**: Provide default values for optional parameters.
5. **Rest Parameters**: Use `...` for variable-length arguments.
6. **Function Types**: Use `type` to define reusable function signatures.

---

# Functions with Objects

TypeScript supports defining functions that take objects as arguments. These objects can have properties with specific types. This helps to enforce type safety and improve code readability and maintainability.

## Examples

### Example 1: Inline Object Type Definition

```typescript
const getData = (product: {
  name: string;
  stock: number;
  price: number;
  photo: string;
}): void => {
  console.log(product);
};
```

In this example, the `getData` function accepts an object with specific properties: `name`, `stock`, `price`, and `photo`. All properties are required.

### Example 2: Using a Type Alias

```typescript
type GetDataType = (product: {
  name: string;
  stock: number;
  price: number;
  photo: string;
}) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};
```

Here, a type alias `GetDataType` is created for the function signature, making the code reusable and cleaner.

### Example 3: Using an Interface

```typescript
interface Product {
  readonly id: string;
  name: string;
  stock: number;
  price: number;
  photo: string;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

const productOne: Product = {
  id: "1",
  name: "Macbook",
  stock: 46,
  price: 100000,
  photo: "samplephotourl",
};

getData(productOne);
```

- The `Product` interface defines the structure of the product object.
- The `id` property is marked as `readonly`, meaning it cannot be modified after the object is created.

## The `never` Type

The `never` type represents values that never occur. This is useful for functions that throw errors or have infinite loops.

### Example: Error Handling Function

```typescript
const errorHandler = (): never => {
  throw new Error("An unexpected error occurred.");
};
```

In this example, the `errorHandler` function never returns a value because it always throws an error.

### Alternative: Returning an Error Object

```typescript
const errorHandler = (): Error => {
  return new Error("An error object returned.");
};
```

In this case, the function returns an `Error` object instead of `never`.

## Key Points

- Use inline object definitions for simple cases.
- Prefer `type` or `interface` for reusable and complex object structures.
- The `never` type is used for functions that don't return any value (e.g., error handling functions).