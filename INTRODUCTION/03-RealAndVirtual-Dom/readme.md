# Real DOM vs Virtual DOM

## What is the DOM?

DOM (Document Object Model) is a tree-like representation of an HTML document that JavaScript can access and modify.

---

# Real DOM

The Real DOM is the actual DOM displayed in the browser.

Whenever the UI changes using traditional JavaScript, the browser updates the Real DOM.

Updating the Real DOM is relatively expensive because the browser may need to:
- Recalculate styles
- Recalculate layout (reflow)
- Repaint the screen

This can reduce performance if many DOM updates happen frequently.

Example:

```javascript
const h1 = document.getElementById("title");
h1.textContent = "Hello";
```

---

# Problem with the Real DOM

If an application has hundreds or thousands of elements, updating the Real DOM repeatedly can become slow.

The issue is **not that the entire page reloads**.

Instead:
- The browser performs costly DOM update operations.
- Frequent updates can hurt performance.

---

# Virtual DOM

React creates a lightweight copy of the Real DOM called the **Virtual DOM**.

The Virtual DOM is stored in memory, not in the browser.

Whenever the state or props change:

1. React creates a new Virtual DOM.
2. React compares it with the previous Virtual DOM.
3. React finds only the changed elements (Diffing).
4. React updates only those parts in the Real DOM.

This process is called **Reconciliation**.

---

# React Fiber

React uses the **Fiber Reconciliation Algorithm**.

Fiber helps React:
- Compare changes efficiently.
- Prioritize updates.
- Update only the necessary elements.

---

# Example

Suppose we have:

```html
<h1>Hello</h1>
<p>Welcome</p>
<button>Click</button>
```

If only the `<h1>` text changes:

Before:

```html
<h1>Hello</h1>
```

After:

```html
<h1>Hello React</h1>
```

React updates only the `<h1>` element.

The `<p>` and `<button>` remain unchanged.

---

# Real DOM vs Virtual DOM

| Real DOM | Virtual DOM |
|----------|-------------|
| Actual browser DOM | Lightweight copy of the DOM |
| Updates are comparatively expensive | Updates happen in memory first |
| Every DOM manipulation affects the browser | React compares old and new Virtual DOM |
| Slower for frequent updates | Faster and more efficient |
| Used by vanilla JavaScript | Used by React |

---

## Key Points

- DOM = Actual page shown in the browser.
- Virtual DOM = Lightweight copy maintained by React.
- React compares the old and new Virtual DOM.
- Only the changed elements are updated in the Real DOM.
- This process improves performance and makes UI updates efficient.