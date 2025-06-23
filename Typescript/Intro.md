## 🚀 1. Setup / Intro

### ✅ What is TypeScript?
TypeScript is a **strongly typed superset of JavaScript** that compiles to plain JavaScript. It adds **optional static typing**, **interfaces**, **enums**, **access modifiers**, and more powerful tools to catch errors at compile time.

- Developed and maintained by Microsoft.
- Helps in large-scale JavaScript applications.
- Can be used with modern frameworks like React, Angular, and Node.js.

> 💡 TS files have the `.ts` extension instead of `.js`.

---

### 🔧 Why Do We Need Node.js?
Node.js is required to:
- Install TypeScript globally using `npm` (Node Package Manager).
- Run JavaScript code outside the browser.
- Use tools like the TypeScript compiler (`tsc`) via the terminal.

---

### 📦 What is `tsc` (TypeScript Compiler)?
`tsc` is the official **TypeScript compiler** that converts `.ts` files into regular `.js` files so they can be executed by the browser or Node.js.

```bash
# Example
tsc hello.ts
````

This generates a `hello.js` file from your TypeScript code.

---

### 🛠️ How to Install TypeScript (Globally)

Make sure you have Node.js and npm installed. Then run:

```bash
npm install -g typescript
```

> ✅ This will install `tsc` globally on your system.

To verify installation, run:

```bash
tsc -v
```

It should show the installed TypeScript version.

---

### 📁 Example Folder Structure

```plaintext
my-typescript-project/
├── hello.ts
└── README.md
```

You can compile and run your `.ts` files using `tsc` and Node.js.

---

## ⚙️ 2. Compile and Run TypeScript Code

### ✅ Step 1: Create a TypeScript file

```ts
// hello.ts
let message: string = "Hello, TypeScript!";
console.log(message);
````

---

### ✅ Step 2: Compile TypeScript to JavaScript

Use the `tsc` command to compile:

```bash
tsc hello.ts
```

This will generate a `hello.js` file:

```js
// hello.js
var message = "Hello, TypeScript!";
console.log(message);
```

---

### ✅ Step 3: Run the JavaScript file

You can run the compiled JavaScript using Node.js:

```bash
node hello.js
```

Expected Output:

```
Hello, TypeScript!
```

---

## 👀 What is the Watcher Mode (`-w`)?

The `-w` or `--watch` flag tells the compiler to **keep watching the file** and automatically recompile it whenever you make changes.

```bash
tsc hello.ts -w
```

This is helpful during development — you don’t need to manually run `tsc` every time.

> 🔁 It keeps running in the terminal and recompiles on save.

You’ll see output like:

```
Watching for file changes.
```

Now whenever you update `hello.ts`, it instantly regenerates `hello.js`.

---

### 🧠 Bonus Tip: Compile All `.ts` Files in Folder

If you have multiple `.ts` files and want to compile all at once:

```bash
tsc
```

But first, generate a `tsconfig.json` using:

```bash
tsc --init
```

This creates a configuration file where you can define:

* Compiler options (target, module, etc.)
* Include/exclude folders
* Output directory

## 🗂️ 3. Project Structure & `tsconfig.json`

When building larger TypeScript projects, it's best to organize your files properly and use a `tsconfig.json` file.

---

### 📁 Recommended Folder Structure

```plaintext
my-typescript-app/
├── src/
│   └── index.ts
├── dist/
│   └── index.js (compiled output)
├── tsconfig.json
└── README.md
````

* `src/`: Your TypeScript source files
* `dist/`: Compiled JavaScript files
* `tsconfig.json`: TypeScript configuration file

---

### 🛠️ How to Create `tsconfig.json`

Run the following command:

```bash
tsc --init
```

This generates a `tsconfig.json` file in the root of your project.

---

### 🔍 Important `tsconfig.json` Options (explained)

```json
{
  "compilerOptions": {
    "target": "es6",                // JS version output
    "module": "commonjs",           // Module system
    "outDir": "./dist",             // Output folder for compiled JS
    "rootDir": "./src",             // Source folder
    "strict": true,                 // Enable all strict type-checking options
    "esModuleInterop": true,        // Allow default imports from CommonJS modules
    "forceConsistentCasingInFileNames": true
  }
}
```

You can customize this based on your project needs.

---

### 🚀 Compile Using `tsconfig.json`

Once configured, just run:

```bash
tsc
```

TypeScript will:

* Read your `tsconfig.json`
* Compile all files in `src/`
* Output them to `dist/`

---

### 🔁 Watch Mode with `tsconfig.json`

```bash
tsc -w
```

This watches all `.ts` files and recompiles on changes — respecting your `tsconfig.json`.