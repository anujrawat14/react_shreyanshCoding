# React Events & Forms Notes

# React Events

React events are written in **camelCase** and use **event handlers**.

```jsx
<button onClick={handleClick}>Click</button>
```

---

# Common Mouse Events

## onClick

Triggered when the element is clicked.

```jsx
<button onClick={handleClick}>Click Me</button>
```

---

## onDoubleClick

Triggered when the element is double-clicked.

```jsx
<button onDoubleClick={handleDoubleClick}>
  Double Click
</button>
```

---

## onMouseEnter

Triggered when the mouse enters an element.

```jsx
<div onMouseEnter={mouseEnter}></div>
```

---

## onMouseLeave

Triggered when the mouse leaves an element.

```jsx
<div onMouseLeave={mouseLeave}></div>
```

---

## onMouseMove

Triggered whenever the mouse moves inside an element.

Useful Properties:

- `e.clientX`
- `e.clientY`

```jsx
<div
  onMouseMove={(e) => {
    console.log(e.clientX);
    console.log(e.clientY);
  }}
></div>
```

---

## onWheel

Triggered when the mouse wheel is scrolled.

Useful Property:

- `e.deltaY`

```jsx
<div onWheel={(e) => console.log(e.deltaY)}></div>
```

### Scroll Direction

```jsx
const pageScroll = (e) => {
  if (e.deltaY > 0) {
    console.log("Scrolling Down");
  } else {
    console.log("Scrolling Up");
  }
};

<div onWheel={pageScroll}></div>
```

### Notes

- `deltaY > 0` → Down
- `deltaY < 0` → Up
- Mouse wheels usually return fixed values (±100 or ±120).
- Touchpads often return varying values because of smooth scrolling.

---

# Keyboard Events

## onKeyDown

Triggered when a key is pressed.

```jsx
<input onKeyDown={(e) => console.log(e.key)} />
```

---

## onKeyUp

Triggered when a pressed key is released.

```jsx
<input onKeyUp={(e) => console.log(e.key)} />
```

---

# Form Events

## onChange

Triggered whenever the input value changes.

```jsx
<input
  onChange={(e) => {
    console.log(e.target.value);
  }}
/>
```

Useful Properties:

- `e.target`
- `e.target.value`

---

## onInput

Triggered immediately while typing.

```jsx
<input
  onInput={(e) => {
    console.log(e.target.value);
  }}
/>
```

---

## onFocus

Triggered when an input gets focus.

```jsx
<input onFocus={() => console.log("Focused")} />
```

---

## onBlur

Triggered when an input loses focus.

```jsx
<input onBlur={() => console.log("Blur")} />
```

---

## onSubmit

Triggered when a form is submitted.

```jsx
const submitForm = (e) => {
  e.preventDefault();
  console.log("Form Submitted");
};

<form onSubmit={submitForm}>
  <button type="submit">Submit</button>
</form>
```

---

# Event Object

Every event handler receives an event object.

```jsx
const handleClick = (e) => {
  console.log(e);
};
```

Common Properties:

| Property | Description |
|----------|-------------|
| e.target | Element that triggered the event |
| e.target.value | Input value |
| e.clientX | Mouse X position |
| e.clientY | Mouse Y position |
| e.deltaY | Scroll direction/value |
| e.key | Pressed keyboard key |

---

# Passing Parameters

### Pass Event

```jsx
const handle = (e) => {
  console.log(e.target.value);
};

<input onChange={handle} />
```

---

### Pass Custom Value

```jsx
const handle = (value) => {
  console.log(value);
};

<input
  onChange={(e) => handle(e.target.value)}
/>
```

---

# Inline Event Handler

```jsx
<button
  onClick={() => {
    console.log("Clicked");
  }}
>
  Click
</button>
```

---

# Separate Function

```jsx
const handleClick = () => {
  console.log("Clicked");
};

<button onClick={handleClick}>
  Click
</button>
```

---

# React Inline Styling

```jsx
<div
  style={{
    backgroundColor: "red",
    color: "white",
    border: "2px solid black",
    padding: "10px",
    marginTop: "20px",
  }}
></div>
```

Rules:

- Use camelCase
- Values like `"2px solid black"` must be strings
- Numeric values represent pixels

Example:

```jsx
style={{
  fontSize: 20,
  marginTop: 30,
}}
```

---

# Quick Revision

### Mouse

- onClick
- onDoubleClick
- onMouseEnter
- onMouseLeave
- onMouseMove
- onWheel

### Keyboard

- onKeyDown
- onKeyUp

### Forms

- onChange
- onInput
- onFocus
- onBlur
- onSubmit

### Useful Event Properties

- e.target
- e.target.value
- e.clientX
- e.clientY
- e.deltaY
- e.key
