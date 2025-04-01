# **React Learning Journey - Episode 23: Form Handling & Validation with ZOD in React**

## **Introduction**

Form handling is a crucial part of any React application, allowing users to input and submit data. In this session, we explored how to manage forms effectively in React and validate them using the **Zod** library. Let's dive deep into the concepts, including value binding, retrieving values, and implementing validation.

---

## **1. Handling Forms in React**

### **Creating a Simple Form**

In React, we can use the `useState` hook to manage form inputs. Below is a basic example of how to create a controlled form.

```jsx
import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
```

### **Key Takeaways:**

- We use `useState` to manage form data.
- The `handleChange` function updates state when input values change.
- The `handleSubmit` function prevents the default form submission and logs the data.

---

## **2. Handling Form Validation with Zod**

### **What is Zod?**

Zod is a TypeScript-first schema declaration and validation library that helps in validating form inputs efficiently.

### **Installing Zod**

Run the following command to install Zod:

```sh
npm install zod
```

### **Using Zod for Form Validation**

```jsx
import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
});

const FormWithZod = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.format());
    } else {
      console.log("Validated Form Data:", formData);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name._errors[0]}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      {errors.email && (
        <p style={{ color: "red" }}>{errors.email._errors[0]}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithZod;
```

### **Key Takeaways:**

- We define a **schema** using `z.object()` to specify validation rules.
- `safeParse` method validates the form data and returns an error object if invalid.
- Errors are displayed conditionally based on the validation result.

---

## **3. Binding Values and Retrieving Data**

### **Binding Input Fields to State**

- We bind input fields using `value={formData.name}`.
- The `onChange` event updates the state dynamically.

### **Retrieving Form Values**

- Inside `handleSubmit`, we can access the form values via `formData`.
- We can send this data to an API or store it in a database.

---

## **Conclusion**

- React forms can be handled using **controlled components** with `useState`.
- Validation is essential to prevent incorrect or incomplete data entry.
- **Zod** provides a simple and powerful way to validate form inputs.
- Implementing validation improves user experience and form reliability.

### **Next Steps**

- Explore form handling with `React Hook Form`.
- Validate complex nested objects with Zod.
- Integrate API calls for submitting validated data.
