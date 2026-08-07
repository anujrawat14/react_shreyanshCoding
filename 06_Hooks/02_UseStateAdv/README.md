# React `useState` Summary

## 1. Primitive State (Number)

```jsx
const [num, setNum] = useState(0);
```

Update state:

```jsx
setNum(num + 1);
```

or (recommended when the new state depends on the previous state):

```jsx
setNum((prev) => prev + 1);
```

---

## 2. Object State

```jsx
const [user, setUser] = useState({
  userName: "sarthak",
  age: 20,
});
```

### ❌ Incorrect

```jsx
setUser({
  userName: "anuj",
});
```

Output:

```jsx
{
  userName: "anuj"
}
```

`age` becomes `undefined` because `useState` **replaces** the entire object.

---

### ✅ Correct

```jsx
setUser((prev) => ({
  ...prev,
  userName: "anuj",
}));
```

Output:

```jsx
{
  userName: "anuj",
  age: 20
}
```

### Important

> `useState` does **not merge objects** automatically.
>
> Use the **spread operator (`...`)** to preserve existing properties.

---

## 3. Array State

```jsx
const [arr, setArr] = useState([10, 20, 30]);
```

### Display Array

```jsx
{
  arr.map((item, index) => (
    <span key={index}>{item} </span>
  ));
}
```

---

## 4. Add an Element

### Recommended

```jsx
setArr((prev) => [...prev, 50]);
```

Output:

```jsx
[10, 20, 30, 50]
```

---

### Another Way

```jsx
const newArr = [...arr];
newArr.push(50);
setArr(newArr);
```

---

### ❌ Incorrect

```jsx
setArr((prev) => [prev, 50]);
```

Output:

```jsx
[
  [10, 20, 30],
  50
]
```

Reason: `prev` is inserted as a single element, creating a nested array.

---

## 5. Replace the Entire Array

```jsx
setArr([40, 50, 60, 70]);
```

Output:

```jsx
[40, 50, 60, 70]
```

---

## 6. Spread Operator

### Object

```jsx
const copy = { ...user };
```

### Array

```jsx
const copy = [...arr];
```

The spread operator creates a **new copy**, helping follow React's immutable state update pattern.

---

## 7. `map()` in React

```jsx
arr.map((item, index) => (
  <span key={index}>{item}</span>
));
```

- `item` → current element
- `index` → current index
- `key` → unique identifier for React

---

## 8. Best Practices

- ✅ Never mutate state directly.
- ✅ Use the spread operator for objects and arrays.
- ✅ Use the callback form when the next state depends on the previous state.
- ✅ Always provide a `key` when rendering lists with `map()`.

---

## Key Takeaways

- `setState` is asynchronous.
- `useState` **replaces** objects and arrays; it does **not merge** them.
- Use `...` (spread operator) to preserve existing state.
- Use `map()` to render arrays in JSX.
- Prefer:

```jsx
setUser((prev) => ({
  ...prev,
  userName: "anuj",
}));

setArr((prev) => [...prev, 50]);
```

These are the standard React patterns you'll use in most projects.