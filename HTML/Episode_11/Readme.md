# Episode 11: Working with Audio using `<audio>` Tag

Welcome to Episode 11 of the **Learn HTML** series! In this episode, we'll learn how to add and control audio in your web pages using the `<audio>` tag.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll understand:

- How to embed audio into an HTML page
- Different attributes of the `<audio>` tag
- How to provide multiple sources and fallback content

---

## 🎵 The `<audio>` Tag

The `<audio>` element is used to embed sound content in a document, such as music or other audio streams.

---

## ✍️ Syntax

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
```

---

### 🔧 Common Attributes

| Attribute  | Description                                  |
| ---------- | -------------------------------------------- |
| `src`      | Path to the audio file                       |
| `controls` | Displays default play, pause, volume UI      |
| `autoplay` | Starts playing automatically (muted advised) |
| `loop`     | Repeats audio after it ends                  |
| `muted`    | Mutes the audio by default                   |
| `preload`  | Preloading behavior for audio                |

---

## 💡 Example

```html
<audio controls preload="auto">
  <source src="song.mp3" type="audio/mpeg" />
  <source src="song.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
```

---

## 🧰 Best Practices

- Offer multiple file formats for browser compatibility
- Use `controls` for accessibility
- Always include fallback content
- Avoid autoplay unless audio is muted (especially on mobile)

---

## 🧠 Summary

- Use `<audio>` to integrate music or sound effects
- Always include `<source>` tags for multiple formats
- Fallback content ensures compatibility with older browsers

---

## 🔗 Next Episode

➡️ [Episode 12: Embedding YouTube Videos and iFrames](../Episode_12/Readme.md)

---

In the next episode, we’ll explore how to embed external content like YouTube videos or entire web pages using the `<iframe>` tag. 🎥🌐
