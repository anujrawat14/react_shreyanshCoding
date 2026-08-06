# React useState - Counter Project

## Problem Statement

Build a counter with the following features:

- Display the current count.
- Increment the count by 1.
- Decrement the count by 1.
- Jump the count by 5.
- Maximum count = 30.
- Minimum count = 0.

---

# Approach

Before writing code, think about the problem.

## Step 1: Do we need state?

The count changes whenever a button is clicked.

Since the UI changes dynamically, we need **state**.

Use:

- `useState()`

---

## Step 2: Initialize the state

Decide the initial value.

Example:

- 0
- 1

---

## Step 3: Display the state

Render the current count on the screen.

Whenever the state changes, React automatically re-renders the component.

---

## Step 4: Update the state

Whenever a button is clicked:

- Increment
- Decrement
- Jump by 5

Use the setter function returned by `useState`.

Prefer the **functional updater** when the next value depends on the previous value.

Example operations:

- Previous + 1
- Previous - 1
- Previous + 5

---

## Step 5: Handle Boundary Conditions

Think about invalid values.

Minimum:

- Count should never go below **0**

Maximum:

- Count should never go above **30**

---

## Step 6: Improve User Experience

Instead of allowing invalid operations:

- Disable the button
- Hide the button
- Ignore the click

Any of these approaches are valid depending on the requirement.

---

# Concepts Used

- useState
- Event Handling
- Functional Updater
- Conditional Rendering
- Inline Styling
- Spread Operator
- Button Disable
- Conditional Visibility

---

# Functional Updater

Whenever the next state depends on the previous state, prefer:

- Previous + 1
- Previous - 1
- Previous + 5

instead of directly using the state variable.

Reason:

React may batch multiple state updates.

The functional updater always receives the latest state.

---

# Conditional Rendering

Render components only when needed.

Examples:

- Show Increment button only if count < 30
- Show Decrement button only if count > 0

Benefits:

- Cleaner UI
- Better Performance
- Better User Experience

---

# Disable vs Hide

## Disable

The button remains visible but cannot be clicked.

Use when you want users to know the action exists but is currently unavailable.

---

## Hide

The button is removed from the UI.

Use when the action should not be available or visible.

---

# Best Practices

- Use meaningful variable names.
- Keep reusable styles in an object.
- Prefer functional updater when updating state.
- Avoid repeating styles.
- Handle edge cases before they occur.
- Keep JSX clean and readable.

---

# Learning Outcomes

After completing this project you should understand:

- What is state.
- Why useState is needed.
- How React re-renders components.
- How event handling works.
- How to update state.
- Functional updater.
- Conditional rendering.
- Button disable.
- Button hide.
- Basic React component structure.

---

# Next Topics

- Multiple useState
- Objects in useState
- Arrays in useState
- Forms
- useEffect