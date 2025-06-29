## 🧠 5. Functions in TypeScript

TypeScript enhances JavaScript functions by enforcing **strict typing** for parameters and return types. This makes your code more predictable, less error-prone, and easier to understand.

---

### 🔹 Example 1: Basic Function (Implicit Return Type)

```typescript
const multiply = (a: number, b: number) => {
  console.log(a, b);
  return a * b; // Inferred as number
};
```

✅ TypeScript infers the return type from the expression.

---

### 🔸 Example 2: Explicit Return Type

```typescript
const multiply = (a: number, b: number): number => {
  return Number(a * b); // Ensures the return is number
};
```

✅ Useful for clarity and when dealing with complex logic.

---

### 🧱 Example 3: Reusable Function Types using `type`

```typescript
type MultiplyFunc = (x: number, y: number) => number;

const multiply: MultiplyFunc = (x, y) => {
  return x * y;
};
```

✅ This improves **reusability** and helps **separate concerns**.

---

### ❓ Example 4: Optional Parameters

You can use `?` to define optional parameters:

```typescript
type OptionalFunc = (a: number, b: number, c?: number) => number;

const calc: OptionalFunc = (a, b, c) => {
  return c ? a * b * c : a * b;
};

calc(10, 20); // Valid
```

✅ Helps in building flexible APIs.

---

### ⚙️ Example 5: Default Parameters

Assign default values to parameters:

```typescript
type DefaultFunc = (a: number, b: number, c?: number) => number;

const calc: DefaultFunc = (a, b, c = 10) => {
  return a * b * c;
};

calc(2, 3); // c = 10 by default
```

---

### ➕ Example 6: Rest Parameters

Use `...` to accept a variable number of arguments:

```typescript
const gather = (...nums: number[]) => {
  return nums; // returns array of numbers
};

gather(1, 2, 3, 4, 5);
```

With `type`:

```typescript
type RestFunc = (...values: number[]) => number[];

const gather: RestFunc = (...values) => values;
```

---

### ✏️ Example 7: Named Functions

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

With `type`:

```typescript
type GreetFunc = (name: string) => string;

const greet: GreetFunc = function greet(name) {
  return `Hi, ${name}`;
};
```

---

## 🧩 Functions That Accept Objects

You can enforce strong typing on object arguments.

---

### ✅ Inline Object Types

```typescript
const getProductDetails = (product: {
  name: string;
  stock: number;
  price: number;
  photo: string;
}): void => {
  console.log(product);
};
```

---

### 🧱 Using `type` Alias for Function

```typescript
type ProductType = {
  name: string;
  stock: number;
  price: number;
  photo: string;
};

type GetDataFunc = (product: ProductType) => void;

const getProductDetails: GetDataFunc = (product) => {
  console.log(product);
};
```

---

### 🟩 Using `interface` for Object Structure

```typescript
interface Product {
  readonly id: string;
  name: string;
  stock: number;
  price: number;
  photo: string;
}

type ProductFunc = (product: Product) => void;

const displayProduct: ProductFunc = (product) => {
  console.log(product);
};

const laptop: Product = {
  id: "abc123",
  name: "MacBook",
  stock: 20,
  price: 150000,
  photo: "macbook.jpg",
};

displayProduct(laptop);
```

---

### 🚫 The `never` Type

Use `never` for functions that **never return** (e.g., throw errors or infinite loops).

```typescript
const throwError = (): never => {
  throw new Error("Something went wrong!");
};
```

Alternatively:

```typescript
const createError = (): Error => {
  return new Error("Returned an error object.");
};
```

---

## 🧠 Key Takeaways

| Feature             | Syntax                               | Purpose                  |
| ------------------- | ------------------------------------ | ------------------------ |
| Function Type Alias | `type Func = (a: number) => number;` | Reusability              |
| Optional Parameters | `(a: number, b?: number)`            | Flexibility              |
| Default Parameters  | `(a: number, b: number = 10)`        | Fallback behavior        |
| Rest Parameters     | `(...args: number[]) => void`        | Handle multiple inputs   |
| Object Parameters   | `(obj: { name: string }) => void`    | Strict shape enforcement |
| `never` return      | `(): never => throw Error(...)`      | For error functions      |

---
