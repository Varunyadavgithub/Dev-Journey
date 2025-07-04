# 📦 6. Classes in TypeScript

In TypeScript, a **class** is a powerful construct used to create objects by encapsulating **properties (data)** and **methods (behavior)** into reusable blueprints.

TypeScript enhances JavaScript classes with **static typing**, **modifiers**, and **interfaces** to help enforce better structure and safety in code.

---

## 🚀 Key Features of TypeScript Classes

---

### 1. 🛠️ Constructor

The `constructor` is a special method that runs automatically when a class is instantiated. It’s used to initialize the class properties.

#### ✅ Example:

```ts
class Player {
  height: number;
  weight: number;

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }
}

const varun = new Player(156, 56);
```

* **Purpose**: To set initial values when creating an object.
* **Note**: You can have only one constructor per class in TypeScript.

---

### 2. 🔐 Access Modifiers

TypeScript classes use access modifiers to control how class members (properties or methods) can be accessed:

| Modifier    | Accessibility                       |
| ----------- | ----------------------------------- |
| `public`    | Accessible everywhere (default)     |
| `private`   | Only inside the same class          |
| `protected` | Inside the class and its subclasses |

#### ✅ Example:

```ts
class Player {
  private height: number;
  public weight: number;

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }

  getHeight(): number {
    return this.height;
  }
}

const varun = new Player(156, 56);
console.log(varun.getHeight());
```

---

### 3. 🧊 Readonly Properties

`readonly` makes a property immutable — it can only be assigned once during initialization or in the constructor.

#### ✅ Example:

```ts
class Player {
  public readonly id: string;

  constructor() {
    this.id = String(Math.random() * 100);
  }
}

const player = new Player();
console.log(player.id);
// player.id = "123"; ❌ Error: Cannot assign to 'id' because it's read-only
```

---

### 4. 🧬 Inheritance

Use `extends` to create subclasses that inherit from a parent class, allowing code reuse.

#### ✅ Example:

```ts
class Player {
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {}

  getHeight(): number {
    return this.height;
  }
}

class Player2 extends Player {
  special: boolean;

  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }

  getPower(): number {
    return this.power; // Accessing protected member
  }
}

const varun = new Player2(156, 56, 23, true);
console.log(varun.getHeight());
console.log(varun.getPower());
```

---

### 5. 🧩 Getters and Setters

`get` and `set` are used to access and update private properties in a safe, controlled way.

#### ✅ Example:

```ts
class Player {
  constructor(private height: number) {}

  get getHeight(): number {
    return this.height;
  }

  set setHeight(val: number) {
    this.height = val;
  }
}

const player = new Player(156);
console.log(player.getHeight);  // Get value
player.setHeight = 168;         // Set value
console.log(player.getHeight);
```

---

### 6. 📐 Interfaces in Classes

Interfaces define a structure that a class must follow, like a contract.

#### ✅ Example:

```ts
interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface GiveId {
  getId(): string;
}

class Product implements ProductType, GiveId {
  private id = String(Math.random() * 100);

  constructor(public name: string, public price: number, public stock: number) {}

  getId(): string {
    return this.id;
  }
}

const product1 = new Product("MacBook", 200000, 20);
console.log(product1.getId());
```

* **Multiple Interfaces**: A class can implement more than one interface.

---

## 🧠 Summary

| Feature              | Description                                            |
| -------------------- | ------------------------------------------------------ |
| **Class**            | Blueprint for creating objects                         |
| **Constructor**      | Initializes object properties                          |
| **Access Modifiers** | Controls visibility (`public`, `private`, `protected`) |
| **Readonly**         | Property can only be assigned once                     |
| **Inheritance**      | Enables class reuse using `extends`                    |
| **Getter/Setter**    | Safely access and modify private data                  |
| **Interfaces**       | Enforce structure a class must implement               |

---

> ✅ **Tip**: Use TypeScript classes to write clean, modular, and scalable object-oriented code.
