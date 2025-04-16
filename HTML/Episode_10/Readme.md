# Episode 10: Embedding Videos with `<video>` Tag

Welcome to Episode 10 of the **Learn HTML** series! In this episode, we'll learn how to embed and control video content using the `<video>` tag in HTML.

---

## 🧠 Learning Objectives

By the end of this episode, you'll be able to:

- Embed videos using the `<video>` tag
- Use various attributes to enhance user experience
- Provide fallback content for unsupported browsers

---

## 🎬 The `<video>` Tag

The `<video>` tag allows you to embed video files into a web page. You can also include multiple source formats for better browser compatibility.

---

## ✍️ Syntax

```html
<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

---

### 🔧 Common Attributes

| Attribute  | Description                                 |
| ---------- | ------------------------------------------- |
| `src`      | Path to the video file                      |
| `controls` | Displays default play, pause, volume UI     |
| `autoplay` | Starts video automatically (muted required) |
| `loop`     | Repeats video after it ends                 |
| `muted`    | Mutes the video by default                  |
| `poster`   | Image to show before the video plays        |
| `preload`  | Preloading behavior for video               |

---

## 💡 Example

```html
<video width="600" controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

---

## 🧰 Best Practices

- Provide multiple formats (e.g., `.mp4`, `.ogg`) for compatibility
- Use the `poster` attribute for a better preview
- Avoid `autoplay` without `muted` (most browsers block it)
- Always include fallback text for older browsers

---

## 🧠 Summary

- The `<video>` tag embeds video files and offers built-in controls
- Use attributes like `controls`, `poster`, and `muted` to improve user experience
- Add multiple `<source>` elements for format support

---

## 🔗 Next Episode

➡️ [Episode 11: Working with Audio using `<audio>` Tag](../Episode_11/Readme.md)

---

Let’s add sound to our web pages! In the next episode, we’ll learn how to use the `<audio>` tag to play music or sound effects with full control. 🎧🔊
