# Episode 9: Image Tag and Best Practices

Welcome to Episode 9 of the **Learn HTML** series! In this episode, we’ll explore how to add images to your website using the `<img>` tag, and we’ll also look at some essential best practices for performance and accessibility.

---

## 🧠 Learning Objectives

By the end of this episode, you'll be able to:

- Use the `<img>` tag to display images
- Understand the purpose of the `src` and `alt` attributes
- Implement best practices for responsive and accessible images

---

## 🖼️ The `<img>` Tag

The `<img>` tag is used to embed images in HTML. It is a self-closing tag.

---

## ✍️ Syntax

```html
<img src="image_url" alt="description of image" />
```

### Attributes:

| Attribute | Description                                    |
| --------- | ---------------------------------------------- |
| `src`     | Source of the image (URL or path)              |
| `alt`     | Alternative text (important for accessibility) |
| `width`   | Width of the image (can be in px or %)         |
| `height`  | Height of the image                            |
| `loading` | Lazy-load images for performance               |

---

## 💡 Examples

### ✅ Basic Image

```html
<img src="logo.png" alt="Company Logo" />
```

### 🌐 Image from URL

```html
<img src="https://example.com/image.jpg" alt="Example Image" />
```

### 📱 Responsive Image with CSS

```html
<img src="hero.jpg" alt="Hero Image" style="max-width: 100%; height: auto;" />
```

---

## 🧰 Best Practices

- Always use `alt` text for accessibility and SEO
- Compress images before using them on the web
- Use modern formats like WebP for better performance
- Use `loading="lazy"` to delay loading images until needed

```html
<img src="photo.webp" alt="Scenic View" loading="lazy" />
```

---

## 🧠 Summary

- The `<img>` tag embeds images using the `src` and `alt` attributes
- Responsive and optimized images enhance performance
- Always consider accessibility for better UX

---

## 🔗 Next Episode

➡️ [Episode 10: Embedding Videos with `<video>` Tag](../Episode_10/Readme.md)

---

Get ready to add rich media to your websites! In the next episode, we’ll learn how to embed videos using the `<video>` tag, control playback, and ensure compatibility. 🎥✨
