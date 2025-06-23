## Objects in TypeScript

Objects in TypeScript allow you to define the structure of data, ensuring type safety and readability. Here's how you can define and work with objects:

### Example 1: Basic Object Definition

You can directly define the structure of an object using inline types:

```typescript
const obj: {
  height: number;
  weight: number;
} = {
  height: 136,
  weight: 36,
};
```

#### Using `type` for Reusability

To reuse the object structure, use the `type` keyword:

```typescript
type ObjType = {
  height: number;
  weight: number;
};
const obj: ObjType = {
  height: 136,
  weight: 36,
};
```

---

### Example 2: Optional Properties

To make a property optional, use the `?` symbol:

```typescript
type ObjType = {
  height: number;
  weight: number;
  gender?: boolean; // Optional property
};

const obj: ObjType = {
  height: 136,
  weight: 36,
};
```

---

### Example 3: Using `interface`

> **Note**: It is recommended to use `interface` instead of `type` when defining objects.

#### Defining an Interface

```typescript
interface ObjInterface {
  height: number;
  weight: number;
  gender?: boolean; // Optional property
}

const obj: ObjInterface = {
  height: 136,
  weight: 36,
};
```

---

### Example 4: Extending Interfaces and Using Functions

You can extend an interface to add more properties and even include functions:

#### Defining Extended Interfaces

```typescript
interface ObjInterface {
  height: number;
  weight: number;
  gender?: boolean;
}

type FuncType = (n: number, m: number) => void;

interface NewObj extends ObjInterface {
  scholar: boolean;
  func?: FuncType; // Optional function property
}
```

#### Creating Objects with Extended Interfaces

```typescript
const gigi: NewObj = {
  height: 123,
  weight: 43,
  gender: true,
  scholar: true,
};

const kendal: NewObj = {
  height: 123,
  weight: 43,
  gender: true,
  scholar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

const obj: ObjInterface = {
  height: 136,
  weight: 36,
};
```

---

### Key Points

1. Use `type` for simpler object definitions and unions.
2. Prefer `interface` for defining and extending objects.
3. Use optional properties (`?`) to make fields optional.
4. Combine interfaces and function types for flexibility.

---