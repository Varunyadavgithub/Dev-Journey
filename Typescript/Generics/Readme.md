### **Generics in TypeScript**

Generics allow you to write reusable and flexible code by creating components that work with various types instead of a single one. Below are explanations and examples from the provided code:

---

#### **1. Basic Generic Function**

```typescript
const func = <CustomType>(n: CustomType): CustomType => {
  return n;
};
const ans = func(20); // Type inferred as number
const ans1 = func("varun"); // Type inferred as string
const ans3 = func(true); // Type inferred as boolean
```

- **Explanation**:
  - The function `func` uses a generic type parameter `<CustomType>` to accept any type and return the same type.
  - Generics allow flexibility, as the same function works for `number`, `string`, and `boolean`.

---

#### **2. Generics with Custom Types**

```typescript
type Persion = {
  name: string;
  age: number;
};

const func = <T>(n: T): T => {
  return n;
};

const persion1: Persion = {
  name: "varun",
  age: 34,
};

const ans = func(persion1); // Generic type inferred
const ans2 = func<Persion>(persion1); // Explicit generic type
```

- **Explanation**:
  - Generics work seamlessly with custom types like `Persion`.
  - You can explicitly specify the type `<Persion>` or let TypeScript infer it.

---

#### **3. Generics with Arrays**

```typescript
const arr: Array<number> = [];
```

- **Explanation**:
  - `Array<number>` is a generic type for an array that holds `number` elements.
  - Similarly, you can have `Array<string>`, `Array<object>`, etc.

---

#### **4. Multiple Generic Types**

```typescript
const func = <T, U>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};
const ans = func<number, string>(20, "lol");
```

- **Explanation**:
  - `T` and `U` are two different generic types.
  - The function accepts and returns a combination of both types, providing greater flexibility.

---

#### **5. Constrained Generics**

```typescript
const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};
const ans = func<number, number>(20, 34);
```

- **Explanation**:
  - The type `U` extends `T`, meaning `U` must be the same as or a subtype of `T`.
  - Constraints ensure that the second parameter (`o`) is compatible with the first (`n`).

---

#### **6. Working with Extended Types**

```typescript
type Persion = {
  name: string;
  age: number;
};
type Persion2 = {
  name: string;
  age: number;
  email: string;
};
const user: Persion = {
  name: "Varun",
  age: 34,
};
const user2: Persion2 = {
  name: "Abhi",
  age: 33,
  email: "abhi@gmail.com",
};

const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};
const ans = func<Persion, Persion2>(user, user2);
```

- **Explanation**:
  - Here, `Persion2` extends `Persion`, so the second parameter can have extra properties (`email`).

---

#### **7. Filtering with Generics**

```typescript
type Persion = {
  name: string;
  age: number;
};

const users: Persion[] = [
  { name: "varun", age: 33 },
  { name: "abhi", age: 23 },
  { name: "jone", age: 35 },
  { name: "levi", age: 25 },
];

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((items) => items[property] == value);
};

const filteredPeopleByName = filterByPeoples(users, "name", "varun");
const filteredPeopleByAge = filterByPeoples(users, "age", 25);

console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
```

- **Explanation**:
  - `filterByPeoples` is a generic function that filters an array of objects (`T[]`) based on a property (`U`) and its value (`T[U]`).
  - `U extends keyof T` ensures that `property` is a valid key of `T`.

---

### **Key Points on Generics**:

1. **Flexibility**:
   - Generics make components reusable for various types.
   - Example: A generic function can handle `number`, `string`, or even complex objects.

2. **Inference vs. Explicit Declaration**:
   - TypeScript can often infer generic types, but you can explicitly declare them when needed.

3. **Constraints**:
   - You can constrain generics using `extends` to enforce relationships between types.

4. **Combining Generics with Built-in Types**:
   - Generics work with built-in types like `Array` or custom types.

5. **Real-world Use Cases**:
   - Reusable functions and components.
   - Creating flexible data structures, such as custom stacks, queues, or dictionaries.

Generics are one of TypeScript’s most powerful features, enabling clean and maintainable code for a variety of use cases.