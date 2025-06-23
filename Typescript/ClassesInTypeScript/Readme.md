In TypeScript, a class is a blueprint for creating objects. A class encapsulates data (properties) and methods that operate on that data. TypeScript builds on JavaScript's class syntax by adding static types and modifiers to ensure safety and structure.

---

## **Key Features of TypeScript Classes**

### 1. **Constructor**
A special method used to initialize an object’s properties when the class is instantiated.

#### Example:
```typescript
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
- **Definition**: The `constructor` is a method that gets called automatically when a new object is created from the class.
- **Purpose**: To initialize the object's properties.

---

### 2. **Access Modifiers**
Access modifiers control the visibility of class members (properties and methods).

#### Types:
- **`public`**: Accessible from anywhere. This is the default visibility.
- **`private`**: Accessible only within the class.
- **`protected`**: Accessible within the class and its subclasses.

#### Example:
```typescript
class Player {
  private height: number; // Only accessible inside this class
  public weight: number;  // Accessible everywhere

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }

  getHeight = (): number => {
    return this.height;
  };
}

const varun = new Player(156, 56);
console.log(varun.getHeight()); // Access private property through a method
```

---

### 3. **Readonly Properties**
Properties marked as `readonly` can only be set during initialization or in the constructor and cannot be modified later.

#### Example:
```typescript
class Player {
  public readonly id: string;

  constructor() {
    this.id = String(Math.random() * 100);
  }
}

const player = new Player();
console.log(player.id);
// player.id = "123"; // Error: Cannot assign to 'id' because it is a read-only property
```

---

### 4. **Inheritance**
Classes can inherit properties and methods from other classes using the `extends` keyword.

#### Example:
```typescript
class Player {
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {}

  getHeight = (): number => this.height;
}

class Player2 extends Player {
  special: boolean;

  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }

  getPower = (): number => this.power; // Accessing protected member
}

const varun = new Player2(156, 56, 23, true);
console.log(varun.getHeight()); // Method from the parent class
console.log(varun.getPower());  // Method from the subclass
```

---

### 5. **Getters and Setters**
Getters and setters provide a controlled way to access and update private properties.

#### Example:
```typescript
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
console.log(player.getHeight); // Access the height
player.setHeight = 168;        // Update the height
console.log(player.getHeight);
```
- **Getter**: Used to retrieve a value.
- **Setter**: Used to update a value with validation if needed.

---

### 6. **Interfaces in Classes**
Classes can implement one or more interfaces to enforce a specific structure.

#### Example:
```typescript
interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface GiveId {
  getId: () => string;
}

class Product implements ProductType, GiveId {
  private id = String(Math.random() * 100);

  constructor(public name: string, public price: number, public stock: number) {}

  getId = (): string => this.id;
}

const product1 = new Product("MacBook", 200000, 20);
console.log(product1.getId()); // Fetch product ID
```
- **Purpose**: Interfaces define a contract for the class to follow.

---

## **Summary**
- **Classes** in TypeScript are used to define objects with properties and methods.
- **Modifiers (`public`, `private`, `protected`)** control the visibility of class members.
- **`readonly`** properties ensure immutability after initialization.
- **Inheritance** enables code reuse between classes.
- **Getters and setters** offer controlled property access.
- **Interfaces** enforce a consistent structure for objects implemented by classes. 

