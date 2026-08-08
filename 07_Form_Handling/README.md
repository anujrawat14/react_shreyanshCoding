# React Form Handling

## What is Form Handling?

Form handling in React means managing form submission and user input using React event handlers.

---

# Approach

## 1. Create the Form

Use the HTML `<form>` element inside the React component.

The form can contain:

- Input fields
- Buttons
- Other form controls

---

## 2. Handle Form Submission

Use the `onSubmit` event on the form.

```text
User submits form
       ↓
onSubmit event
       ↓
Event object (e)
       ↓
preventDefault()
       ↓
Form handling logic
```

---

## 3. Prevent Default Behaviour

By default, submitting a form reloads the page.

Use:

```text
e.preventDefault()
```

to prevent the default browser behaviour.

---

## 4. Create a Submit Handler

Form submission logic can be written inside `onSubmit` or inside a separate function.

### Inline Handler

Useful when the logic is small.

### Separate Handler

Useful when the form logic becomes larger or needs to be reused.

---

# Important Concepts

- `<form>`
- `onSubmit`
- Event Object
- `e.preventDefault()`
- Submit Handler
- Inline Event Handler
- Separate Event Handler

---

# React Two-Way Binding

## What is Two-Way Binding?

Two-way binding means keeping the **input value and React state synchronized**.

```text
User types
    ↓
onChange
    ↓
State updates
    ↓
Component re-renders
    ↓
Input value updates
```

---

# Approach

## 1. Create State

Create state to store the input value.

```text
Input Value
     ↓
React State
```

---

## 2. Connect Input with State

Use the `value` attribute to make React state control the input.

```text
value → State
```

This creates a **controlled component**.

---

## 3. Detect Input Changes

Use `onChange` whenever the user types.

```text
onChange
    ↓
e.target.value
    ↓
State
```

---

## 4. Update State

Use the state setter to update the input value.

```text
User Input
    ↓
e.target.value
    ↓
setState()
    ↓
State Updated
```

---

## 5. Submit the Form

When the form is submitted:

- Prevent the default browser behaviour.
- Access the value stored in state.
- Perform the required operation.

---

## 6. Clear the Input

After submission, reset the state.

```text
State = ""
```

Because the input is controlled by the state, the input will also become empty.

---

# Controlled Component

An input is called a **controlled component** when React state controls its value.

```text
        React State
             ↓
          value
             ↓
           Input
             ↓
         onChange
             ↓
        React State
```

React becomes the **source of truth** for the input value.

---

# One-Way vs Two-Way Binding

## One-Way

```text
State → UI
```

Data flows from React state to the UI.

---

## Two-Way

```text
State ↔ Input
```

Data flows in both directions:

```text
State → Input
Input → State
```

---

# Important Concepts

- `useState`
- Controlled Components
- `value`
- `onChange`
- `e.target.value`
- State Setter
- Form Submission
- `e.preventDefault()`
- Clearing Input
- Two-Way Data Binding

---

# Key Point

For a controlled input, remember:

```text
       State
       ↓   ↑
     value onChange
       ↓   ↑
      Input
```

**`value` displays the state, while `onChange` updates the state.**