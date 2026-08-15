# React Router DOM — useNavigate Hook

## What is `useNavigate()`?

`useNavigate()` is a hook provided by **React Router DOM** that allows us to navigate to different routes **programmatically**.

Instead of using a `<Link>` or clicking an `<a>` tag, we can navigate from JavaScript, usually inside an event handler.

---

## Import

```jsx
import { useNavigate } from 'react-router-dom'
```

---

## Basic Syntax

```jsx
const navigate = useNavigate()
```

`useNavigate()` returns a `navigate` function.

We can then use:

```jsx
navigate('/route')
```

---

## Example

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    // useNavigate hook
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate('/')}>
                Go to Home
            </button>

            <button onClick={() => navigate('/about')}>
                Go to About
            </button>
        </div>
    )
}

export default Navbar2
```

---

# Different Ways to Use `navigate()`

## 1. Navigate to a Specific Route

```jsx
navigate('/')
```

This takes the user directly to `/`.

Example:

```jsx
navigate('/about')
```

The browser goes to:

```text
/about
```

---

## 2. Go Back

```jsx
navigate(-1)
```

This moves **one step backward** in the browser history.

Example:

```text
Home → About → Product
                  ↑
```

If we call:

```jsx
navigate(-1)
```

we go:

```text
Home → About
```

---

## 3. Go Forward

```jsx
navigate(1)
```

This moves **one step forward** in the browser history.

Example:

```text
Home → About → Product
        ↑
```

If we call:

```jsx
navigate(1)
```

we go to:

```text
Home → About → Product
                  ↑
```

`navigate(+1)` also works, but `navigate(1)` is cleaner.

---

# Complete Example

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    // useNavigate hook
    const navigate = useNavigate()

    return (
        <div>

            <button onClick={() => navigate('/')}>
                Return to Home
            </button>

            <button onClick={() => navigate(-1)}>
                Return to Previous Page
            </button>

            <button onClick={() => navigate(1)}>
                Return to Next Page
            </button>

        </div>
    )
}

export default Navbar2
```

---

# `useNavigate()` vs `<Link>`

### `<Link>`

Used when navigation is directly connected to a UI link.

```jsx
<Link to="/about">About</Link>
```

### `useNavigate()`

Useful when navigation needs to happen **inside JavaScript logic**.

```jsx
const navigate = useNavigate()

const handleLogin = () => {
    // login logic
    navigate('/dashboard')
}
```

---

# Important Points

- `useNavigate()` is provided by `react-router-dom`.
- It is used for **programmatic navigation**.
- `navigate('/path')` goes to a specific route.
- `navigate(-1)` goes back one history entry.
- `navigate(1)` goes forward one history entry.
- `useNavigate()` must be used inside a component that is rendered inside a Router.

---

# One-Line Definition

> `useNavigate()` is a React Router DOM hook used to navigate between routes programmatically.
**
**
