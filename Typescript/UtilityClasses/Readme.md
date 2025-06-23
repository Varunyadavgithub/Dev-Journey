### **Utility Classes in TypeScript**
Utility classes in TypeScript are built-in generics that allow you to transform, modify, and work with types in various ways. They help make type definitions more dynamic, flexible, and reusable.

---

### **1. `Partial<Type>`**

- **Purpose:** Converts all properties of a type into optional properties.
- **Use Case:** To make some or all fields in an object optional for use cases like updates where only a subset of properties are provided.

```typescript
type User = {
  name: string;
  email: string;
};
type User2 = Partial<User>;

const user1: User2 = {}; // Valid because all properties are optional
const user2: User2 = { name: "Varun" }; // Valid
```

---

### **2. `Required<Type>`**

- **Purpose:** Converts all optional properties of a type into required properties.
- **Use Case:** To ensure that all properties of an object are mandatory.

```typescript
type User = {
  name?: string;
  email?: string;
};
type User2 = Required<User>;

const user: User2 = { name: "Varun", email: "varun@gmail.com" }; // All properties must be provided
```

---

### **3. `Readonly<Type>`**

- **Purpose:** Makes all properties of a type read-only, meaning they cannot be reassigned.
- **Use Case:** To create immutable objects.

```typescript
type User = {
  name: string;
  email: string;
};
const user: Readonly<User> = {
  name: "Varun",
  email: "varun@gmail.com",
};

// user.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property
```

---

### **4. `Record<Keys, Type>`**

- **Purpose:** Creates an object type with keys of the specified `Keys` and values of the specified `Type`.
- **Use Case:** To map key-value pairs with specific keys and values.

```typescript
type User2 = Record<"name" | "email" | "gender", string>;

const user: User2 = {
  name: "Varun",
  email: "varun@gmail.com",
  gender: "male",
};

// Example with multiple keys and custom types
interface UserInfo {
  age: number;
}
type UserName = "john" | "elon" | "varun";
const users: Record<UserName, UserInfo> = {
  john: { age: 32 },
  elon: { age: 31 },
  varun: { age: 28 },
};
```

---

### **5. `Pick<Type, Keys>`**

- **Purpose:** Extracts a subset of properties from a type.
- **Use Case:** To create a smaller type containing only specific properties.

```typescript
interface OrderInfo {
  id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

const shipping: ShippingInfo = {
  city: "Mumbai",
  state: "Maharashtra",
  country: "India",
};
```

---

### **6. `Omit<Type, Keys>`**

- **Purpose:** Removes specific properties from a type.
- **Use Case:** To create a new type excluding certain properties.

```typescript
interface ShippingInfo {
  city: string;
  state: string;
  country: string;
}
type WithoutCountry = Omit<ShippingInfo, "country">;

const info: WithoutCountry = {
  city: "Mumbai",
  state: "Maharashtra",
};
```

---

### **7. `Exclude<Type, ExcludedUnion>`**

- **Purpose:** Excludes types from a union.
- **Use Case:** To filter out unwanted types from a union.

```typescript
type MyUnion = string | number | boolean;
type WithoutBoolean = Exclude<MyUnion, boolean>; // Result: string | number
```

---

### **8. `Extract<Type, Union>`**

- **Purpose:** Extracts types from a union that are assignable to a given union.
- **Use Case:** To select specific types from a union.

```typescript
type MyUnion = string | number | boolean;
type OnlyBoolean = Extract<MyUnion, boolean>; // Result: boolean
```

---

### **9. `NonNullable<Type>`**

- **Purpose:** Removes `null` and `undefined` from a type.
- **Use Case:** To ensure a type does not allow `null` or `undefined`.

```typescript
type MyUnion = string | number | boolean | null | undefined;
type NonNullType = NonNullable<MyUnion>; // Result: string | number | boolean
```

---

### **10. `Parameters<Type>`**

- **Purpose:** Extracts the parameter types of a function type as a tuple.
- **Use Case:** To work with function argument types dynamically.

```typescript
const myfunc = (a: number, b: string) => {
  console.log(a + b);
};
type Params = Parameters<typeof myfunc>; // Result: [number, string]
```

---

### **11. `ConstructorParameters<Type>`**

- **Purpose:** Extracts the parameter types of a class constructor as a tuple.
- **Use Case:** To capture the types used to construct a class.

```typescript
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type ConstructorArgs = ConstructorParameters<typeof SampleClass>; // Result: [string, string]
```

---

### **12. `ReturnType<Type>`**

- **Purpose:** Extracts the return type of a function type.
- **Use Case:** To reuse or infer the return type of a function.

```typescript
const myfunc = (a: number, b: string): string => {
  return a + b;
};
type FuncReturnType = ReturnType<typeof myfunc>; // Result: string
```

---

### **13. `InstanceType<Type>`**

- **Purpose:** Extracts the instance type of a class.
- **Use Case:** To infer the type of an object created from a class.

```typescript
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type Instance = InstanceType<typeof SampleClass>;

const user: Instance = { s: "Hello", t: "World" };
```

---

### **Summary**

| Utility Type         | Description                                                        |
|-----------------------|--------------------------------------------------------------------|
| `Partial<Type>`       | Makes all properties optional.                                    |
| `Required<Type>`      | Makes all properties required.                                    |
| `Readonly<Type>`      | Makes all properties read-only.                                   |
| `Record<Key, Type>`   | Creates a type with specified keys and value types.               |
| `Pick<Type, Keys>`    | Extracts a subset of properties.                                  |
| `Omit<Type, Keys>`    | Excludes specific properties.                                     |
| `Exclude<Type, Keys>` | Removes types from a union.                                       |
| `Extract<Type, Keys>` | Extracts types assignable to a union.                             |
| `NonNullable<Type>`   | Removes `null` and `undefined`.                                   |
| `Parameters<Type>`    | Extracts parameter types from a function.                        |
| `ConstructorParameters<Type>` | Extracts constructor parameter types.                    |
| `ReturnType<Type>`    | Extracts the return type of a function.                           |
| `InstanceType<Type>`  | Extracts the instance type of a class.                            |