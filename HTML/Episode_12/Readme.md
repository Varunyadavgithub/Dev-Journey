# Episode 12: Embedding YouTube Videos and iFrames

Welcome to Episode 12 of the **Learn HTML** series! In this episode, you will learn how to embed external content such as YouTube videos and websites into your HTML pages using the `<iframe>` tag.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll be able to:

- Embed YouTube videos using `<iframe>`
- Customize the size and behavior of the embedded content
- Understand basic security considerations

---

## 📺 Embedding YouTube Videos

To embed a YouTube video, use the `<iframe>` tag with the appropriate video URL.

### ✅ Example

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

---

## 🌐 Embedding External Websites

You can also embed other websites (if they allow it) using `<iframe>`:

```html
<iframe src="https://example.com" width="100%" height="500px">
  Your browser does not support iframes.
</iframe>
```

---

## 🔒 Security Tips

- Not all websites allow embedding — they may block it using headers (e.g., X-Frame-Options)
- Avoid embedding untrusted third-party content to prevent XSS attacks
- Use `sandbox` attribute for security control

```html
<iframe src="https://example.com" sandbox></iframe>
```

---

## 🧠 Summary

- Use `<iframe>` to embed videos and web pages into your HTML document
- Customize dimensions with `width` and `height`
- Use `allowfullscreen` for a better video experience
- Follow best practices for safe embedding

---

## 🔗 Next Episode

➡️ [Episode 13: Tables in HTML](../Episode_13/Readme.md)

---

In the next episode, we’ll learn how to create structured data layouts using **HTML Tables**. 🧾
