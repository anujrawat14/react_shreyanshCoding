# JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

It makes writing UI easier and more readable.

Example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

---

## Is JSX HTML?

❌ No.

JSX looks like HTML, but it is **not HTML**.

The browser cannot understand JSX directly.

React converts JSX into JavaScript using tools like **Babel** before the code runs.

Example:

JSX

```jsx
const element = <h1>Hello React</h1>;
```

After compilation

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello React"
);
```

---

## Why JSX?

- Easier to write UI
- More readable than `createElement()`
- Allows JavaScript expressions inside HTML-like syntax
- Makes components easier to build

---

## JavaScript inside JSX

Use `{}` to write JavaScript expressions.

Example:

```jsx
const username = "Anuj";

function App() {
  return <h1>Hello {username}</h1>;
}
```

Output:

```
Hello Anuj
```

---

## Key Points

- JSX = JavaScript XML
- JSX is a syntax extension for JavaScript.
- JSX looks like HTML but is not HTML.
- JSX is converted into JavaScript by Babel.
- React uses JSX to build user interfaces.