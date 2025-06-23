## 🧠 2. Data Types in TypeScript

TypeScript is a **statically typed** language. That means you can define what type of value a variable can hold at compile time — reducing runtime errors and improving code quality.

---

### ✨ Implicit Typing (Type Inference)

TypeScript can automatically detect (infer) the type of a variable based on the initial value assigned to it.

```typescript
let x = 42; // inferred as number
let y = "hello"; // inferred as string
let z = true; // inferred as boolean
```

If you declare a variable **without initializing**, TypeScript assigns it the type `any`.

```typescript
let a; // type: any
a = 5;
a = "Varun"; // allowed, because 'any' disables type checking
```

**💡 Best Practice:** Avoid using `any` unless necessary. Use explicit typing for clarity.

---

### ✍️ Explicit Typing

You can (and should) declare variable types explicitly for better code readability and safety.

#### ✅ Method 1: Direct Type Annotation

```typescript
let age: number = 25;
let firstName: string = "Varun";
let isLoggedIn: boolean = true;
```

#### ✅ Method 2: Type Casting

You can also specify types using casting.

```typescript
let value = <number>100; // Angle-bracket syntax
let name = "Varun" as string; // 'as' syntax (recommended in JSX/TSX)
```

> ⚠️ The `<type>` syntax doesn’t work in `.tsx` (React/JSX) files. Use `as` instead.

---

### 🔄 `any` Type (Danger Zone)

Using `any` disables type checking:

```typescript
let data: any = 10;
data = "hello";
data = true;
```

- It gives flexibility but removes safety.
- Use when dealing with dynamic content (e.g., 3rd party APIs).

---

### 🪜 `unknown` Type (Safer than `any`)

Similar to `any`, but you can’t use it until you **check its type**.

```typescript
let userInput: unknown;
userInput = "Varun";

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // ✅ safe
}
```

> ✅ Prefer `unknown` over `any` when working with uncertain values.

---

### 🔀 Union Types

Union types allow a variable to hold **one of multiple types**.

```typescript
let id: number | string;

id = 123; // ✅
id = "ABC123"; // ✅
id = true; // ❌ Error
```

- Great for APIs that return mixed types.
- Can be used with functions too:

```typescript
function printValue(val: number | string) {
  console.log(val);
}
```

---

### 🗂️ Literal Types

You can restrict a variable to **specific values**.

```typescript
let direction: "up" | "down" | "left" | "right";

direction = "up"; // ✅
direction = "forward"; // ❌ Error
```

Useful for:

- Button states (`"start" | "stop"`)
- Form modes (`"edit" | "create"`)

---

### 📚 Type Aliases

Give a **custom name** to a complex type.

```typescript
type ID = string | number;

let userId: ID = 101;
let productId: ID = "PROD001";
```

---

### 🧠 Summary Table

| Keyword   | Purpose                   | Example                         |                  |           |
| --------- | ------------------------- | ------------------------------- | ---------------- | --------- |
| `number`  | Numeric values            | `let age: number = 25;`         |                  |           |
| `string`  | Textual data              | `let name: string = "Varun";`   |                  |           |
| `boolean` | True/false values         | `let isActive: boolean = true;` |                  |           |
| `any`     | Any type (unsafe)         | `let x: any = 42;`              |                  |           |
| `unknown` | Safe alternative to `any` | `let input: unknown;`           |                  |           |
| \`        | \`                        | Union of multiple types         | \`let id: number | string;\` |
| `type`    | Custom reusable types     | \`type ID = string              | number;\`        |           |
| `as`      | Type casting syntax       | `let x = value as number;`      |                  |           |
