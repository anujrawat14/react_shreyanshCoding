# React Context API — Theme Switching

> Notes based on the exact code and approach used in this project.

---

## 1. What We Are Building

We are creating a simple **Light/Dark Theme Switcher** using React's **Context API**.

The theme state is stored inside a Context Provider, and components such as:

- `Navbar`
- `Nav2`
- `Button`

can access the same theme without passing it through props.

### Flow

```text
ThemeContext
     |
     |  theme1 + settheme1
     ↓
  Provider
     |
     ├──────────────┐
     ↓              ↓
  Navbar          Button
     |
     ↓
   Nav2
```

---

# 2. Creating the Context

We create a Context using `createContext()`.

### `ThemeContext.jsx`

```jsx
import React, { createContext } from 'react'

export const theme = createContext()
```

Here:

```jsx
createContext()
```

creates a Context object.

We export it because other components need to use it with:

```jsx
useContext(theme)
```

---

# 3. Creating Theme State

Inside the Context Provider, we create the theme state.

```jsx
const [theme1, settheme1] = useState("light")
```

This means:

```text
theme1      → current theme
settheme1   → function to change the theme
```

Initially:

```text
theme1 = "light"
```

---

# 4. Providing Theme Through Context

Our Provider looks like this:

```jsx
<theme.Provider value={[theme1, settheme1]}>
    {props.children}
</theme.Provider>
```

The important part is:

```jsx
value={[theme1, settheme1]}
```

We are passing an **array** through Context.

The array contains:

```js
[
    theme1,
    settheme1
]
```

For example:

```js
[
    "light",
    settheme1
]
```

---

# 5. Complete `ThemeContext.jsx`

Our final Context code:

```jsx
import React, { createContext, useState } from 'react'

export const theme = createContext()

const ThemeContext = (props) => {

    const [theme1, settheme1] = useState("light")

    return (
        <div>
            <theme.Provider value={[theme1, settheme1]}>
                {props.children}
            </theme.Provider>
        </div>
    )
}

export default ThemeContext
```

### Important

The Context Provider must wrap the components that need the Context.

---

# 6. Wrapping `App` with the Provider

In `main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeContext from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContext>
            <App />
        </ThemeContext>
    </StrictMode>
)
```

Now the component tree is:

```text
ThemeContext
     ↓
    App
     ↓
  Navbar
     ↓
   Nav2
```

All components inside `ThemeContext` can access:

```text
theme1
settheme1
```

---

# 7. Consuming Context

To access the Context inside a component, use:

```jsx
useContext(theme)
```

Because our Provider sends an array:

```jsx
value={[theme1, settheme1]}
```

we use array destructuring:

```jsx
const [theme1, settheme1] = useContext(theme)
```

This gives us:

```text
theme1      → "light"
settheme1   → state update function
```

---

# 8. Button Component

Our Button uses the Context to change the theme.

### `Button.jsx`

```jsx
import React, { useContext } from 'react'
import { theme } from '../Context/ThemeContext'

const Button = () => {

    const [theme1, settheme1] = useContext(theme)

    return (
        <div>
            <button
                onClick={() => {
                    settheme1(
                        prev => prev === "light"
                            ? "dark"
                            : "light"
                    )
                }}
                className='bg-red-400 mt-4 p-2.5'
            >
                Change theme
            </button>
        </div>
    )
}

export default Button
```

---

# 9. Understanding the Theme Toggle

The important code is:

```jsx
settheme1(
    prev => prev === "light"
        ? "dark"
        : "light"
)
```

This checks the previous theme.

### If previous theme is light

```text
light
  ↓
condition is true
  ↓
dark
```

### If previous theme is dark

```text
dark
  ↓
condition is false
  ↓
light
```

So:

```text
light → dark → light → dark
```

---

# 10. Why Use `prev`?

We are using a **functional state update**:

```jsx
settheme1(prev => ...)
```

`prev` represents the previous/current state.

This is useful when the new value depends on the previous value.

Example:

```jsx
settheme1(prev =>
    prev === "light" ? "dark" : "light"
)
```

---

# 11. Using Theme in Navbar

In `Navbar.jsx`, we consume the Context:

```jsx
import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { theme } from '../Context/ThemeContext'

const Navbar = () => {

    const [theme1] = useContext(theme)

    return (
        <div
            className={`${theme1} flex justify-between px-4 py-4`}
        >
            <h2 className='text-xl text-black'>
                Shreyans
            </h2>

            <Nav2 />
        </div>
    )
}

export default Navbar
```

Here:

```jsx
const [theme1] = useContext(theme)
```

only takes the first value from the Context array.

We don't need `settheme1` in Navbar, so we don't destructure it.

---

# 12. Dynamic `className`

This is an important part of the project.

We use:

```jsx
className={`${theme1} flex justify-between px-4 py-4`}
```

### When theme is `light`

React creates:

```html
class="light flex justify-between px-4 py-4"
```

### When theme is `dark`

React creates:

```html
class="dark flex justify-between px-4 py-4"
```

Therefore, the CSS class automatically changes when the Context state changes.

---

# 13. CSS Theme Classes

In `index.css`:

```css
.light {
    background-color: skyblue;
}

.dark {
    background-color: gray;
}
```

So:

```text
theme1 = "light"
        ↓
className = "light ..."
        ↓
background-color: skyblue
```

And:

```text
theme1 = "dark"
        ↓
className = "dark ..."
        ↓
background-color: gray
```

---

# 14. Why `${theme1}` Is Used

Wrong:

```jsx
className='{theme1}'
```

This is treated as a normal string.

Correct:

```jsx
className={`${theme1}`}
```

Or with other classes:

```jsx
className={`${theme1} flex justify-between px-4 py-4`}
```

The backticks create a **template literal**, allowing JavaScript values to be inserted.

---

# 15. Navbar + Nav2

`Navbar` can render `Nav2` normally:

```jsx
<Nav2 />
```

`Nav2` does not need the theme to be passed through props.

It can consume the Context directly.

### `Nav2.jsx`

```jsx
import React, { useContext } from 'react'
import { theme } from '../Context/ThemeContext'

const Nav2 = () => {

    const [theme1] = useContext(theme)

    return (
        <div className='font-semibold text-black text-lg flex gap-5'>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <h2>Services</h2>
            <h2>{theme1}</h2>
        </div>
    )
}

export default Nav2
```

Now `Nav2` can directly access:

```jsx
theme1
```

without receiving:

```jsx
<Nav2 theme={theme1} />
```

---

# 16. Context vs Props in This Project

### Using Props

Without Context, we might do:

```jsx
<Navbar theme={theme1} />
```

Then:

```jsx
<Nav2 theme={theme1} />
```

Then another child might need:

```jsx
<Child theme={theme1} />
```

This becomes **prop drilling**.

---

### Using Context

With Context:

```jsx
const [theme1] = useContext(theme)
```

Any component inside the Provider can directly access the theme.

```text
ThemeContext
     ↓
     App
     ↓
  Navbar
     ↓
   Nav2
```

`Navbar` and `Nav2` can both use:

```jsx
useContext(theme)
```

---

# 17. Important Rule: Same Context

The Context used by the Provider and `useContext()` must be the same.

Correct:

```jsx
<theme.Provider>
```

and:

```jsx
useContext(theme)
```

Both use:

```text
theme
```

---

# 18. Error We Faced: Two Different Contexts

At one point we had:

```jsx
export const ThemeDataContext = createContext()
export const theme = createContext()
```

These are two different Context objects.

Then we used:

```jsx
<theme.Provider>
```

but consumed:

```jsx
useContext(ThemeDataContext)
```

This does not work.

### Why?

```text
ThemeDataContext
      ↓
   Context A

theme
      ↓
   Context B
```

Provider:

```text
Context B
```

Consumer:

```text
Context A
```

The consumer does not receive the Provider's value.

### Correct

Use the same Context:

```jsx
<theme.Provider>
```

and:

```jsx
useContext(theme)
```

---

# 19. Error We Faced: Rendering an Object

Earlier we used a Context value like:

```jsx
value={{
    ThemeContext: "anuj",
    theme: "light"
}}
```

Then we tried:

```jsx
<h2>{name}</h2>
```

React produced:

```text
Objects are not valid as a React child
```

because `name` was an object:

```js
{
    ThemeContext: "anuj",
    theme: "light"
}
```

React cannot directly render the entire object.

We would need:

```jsx
<h2>{name.ThemeContext}</h2>
```

or:

```jsx
<h2>{name.theme}</h2>
```

---

# 20. Array vs Object Context Value

In our final approach, we use:

```jsx
value={[theme1, settheme1]}
```

Therefore:

```jsx
const [theme1, settheme1] = useContext(theme)
```

is correct.

If we instead used:

```jsx
value={{
    theme1,
    settheme1
}}
```

we would need:

```jsx
const { theme1, settheme1 } = useContext(theme)
```

### Remember

```text
Array  → []
Object → {}
```

---

# 21. Final Project Structure

A simple structure for this project:

```text
src/
│
├── Components/
│   ├── Navbar.jsx
│   ├── Nav2.jsx
│   └── Button.jsx
│
├── Context/
│   └── ThemeContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 22. Complete Working Flow

```text
                    ThemeContext
                         │
                         │
                  useState("light")
                         │
                 ┌───────┴───────┐
                 │               │
              theme1          settheme1
                 │               │
                 └───────┬───────┘
                         ↓
                  theme.Provider
                         │
                         ↓
                        App
                         │
                    ┌────┴────┐
                    ↓         ↓
                 Navbar     Button
                    │         │
                    ↓         │
                  Nav2        │
                              │
                         settheme1()
                              │
                              ↓
                    light ↔ dark
                              │
                              ↓
                    Components re-render
                              │
                              ↓
                  Dynamic CSS class changes
                              │
                    ┌─────────┴─────────┐
                    ↓                   ↓
                 .light               .dark
                 skyblue               gray
```

---

# 23. Final Important Code

### ThemeContext.jsx

```jsx
import React, { createContext, useState } from 'react'

export const theme = createContext()

const ThemeContext = (props) => {

    const [theme1, settheme1] = useState("light")

    return (
        <theme.Provider value={[theme1, settheme1]}>
            {props.children}
        </theme.Provider>
    )
}

export default ThemeContext
```

### Button.jsx

```jsx
import React, { useContext } from 'react'
import { theme } from '../Context/ThemeContext'

const Button = () => {

    const [theme1, settheme1] = useContext(theme)

    return (
        <button
            onClick={() => {
                settheme1(
                    prev => prev === "light"
                        ? "dark"
                        : "light"
                )
            }}
            className='bg-red-400 mt-4 p-2.5'
        >
            Change theme
        </button>
    )
}

export default Button
```

### Navbar.jsx

```jsx
import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { theme } from '../Context/ThemeContext'

const Navbar = () => {

    const [theme1] = useContext(theme)

    return (
        <div
            className={`${theme1} flex justify-between px-4 py-4`}
        >
            <h2 className='text-xl text-black'>
                Shreyans
            </h2>

            <Nav2 />
        </div>
    )
}

export default Navbar
```

### CSS

```css
.light {
    background-color: skyblue;
}

.dark {
    background-color: gray;
}
```

---

# 24. Key Takeaways

1. `createContext()` creates a Context.
2. The Provider shares values with child components.
3. `useContext()` consumes the Context.
4. The Provider and consumer must use the **same Context object**.
5. We used an array as the Context value:
   ```jsx
   value={[theme1, settheme1]}
   ```
6. Therefore we use array destructuring:
   ```jsx
   const [theme1, settheme1] = useContext(theme)
   ```
7. `settheme1(prev => ...)` toggles the theme based on the previous state.
8. Dynamic classes can be created with:
   ```jsx
   className={`${theme1} ...`}
   ```
9. CSS handles the actual theme styling:
   ```css
   .light { background-color: skyblue; }
   .dark { background-color: gray; }
   ```
10. Context avoids unnecessary prop drilling.
