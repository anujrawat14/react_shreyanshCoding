# React Router DOM — Revision Notes

## 1. What is React Router DOM?

React Router DOM is a library used to handle **routing/navigation in React applications**.

It allows us to display different components based on the URL **without completely reloading the webpage**.

It is commonly used to build **SPA (Single Page Applications)**.

### Example

```text
/          → Home
/about     → About
/contact   → Contact
```

---

## 2. SPA — Single Page Application

In a traditional website:

```text
Click About
    ↓
Browser requests About page
    ↓
Entire page reloads
```

In a React SPA:

```text
Click About
    ↓
React Router changes URL
    ↓
Matching React component renders
    ↓
No full page reload
```

React Router provides a multi-page-like navigation experience while keeping the application a Single Page Application.

---

# 3. Types of Routers

React Router provides different routers for different situations.

### BrowserRouter

Most commonly used for normal React web applications.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

It uses the browser's **History API** for client-side routing.

Example:

```text
/
 /about
 /contact
```

### HashRouter

Uses `#` in the URL.

```text
/
/#/about
/#/contact
```

Useful in some static hosting situations where server configuration for normal URLs is limited.

### MemoryRouter

Stores routing history **in memory instead of the browser URL**.

Useful mainly for:

- Testing
- Non-browser environments
- Special application flows

### StaticRouter

Primarily used for **server-side rendering (SSR)** where the location is static rather than controlled by browser navigation.

### For my current level

Focus mainly on:

```text
BrowserRouter ⭐⭐⭐
```

Just understand what the other three are.

---

# 4. BrowserRouter

`BrowserRouter` provides the routing environment to the React application.

Usually it is placed around `App`.

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

React Router components such as:

```text
Routes
Route
Link
NavLink
useNavigate
useParams
```

need the router context to work properly.

---

# 5. Routes

`Routes` is the container that holds all route definitions.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

Think:

```text
Routes
   ↓
Contains all Route definitions
```

---

# 6. Route

`Route` tells React Router:

> When the URL matches this path, render this component.

Example:

```jsx
<Route path="/" element={<Home />} />
```

Means:

```text
URL: /
    ↓
Render Home
```

Another example:

```jsx
<Route path="/about" element={<About />} />
```

Means:

```text
URL: /about
    ↓
Render About
```

### Important

Modern React Router syntax:

```jsx
<Route path="/about" element={<About />} />
```

The `element` receives a React element.

---

# 7. Link

`Link` is used to navigate between routes.

```jsx
import { Link } from "react-router-dom";
```

Example:

```jsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

### Why not `<a>`?

Normal HTML:

```jsx
<a href="/about">About</a>
```

performs normal browser navigation and can cause a full page reload.

React Router:

```jsx
<Link to="/about">About</Link>
```

performs **client-side navigation**.

### Remember

```text
<a href="">
     ↓
Normal browser navigation

<Link to="">
     ↓
React Router navigation
```

---

# 8. What I Did Today — Basic Router Setup

I created the following structure:

```text
App
 ├── Navbar
 ├── Routes
 │    ├── Home
 │    ├── About
 │    └── Contact
 └── Footer
```

My `App.jsx`:

```jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="mb-5 h-10 w-full bg-slate-500">
        <h1 className="text-center text-xl font-bold">
          This is footer
        </h1>
      </div>

    </div>
  )
}

export default App
```

This is a good structure because the `Navbar` is separated into its own component.

---

# 9. Navbar Navigation

I learned to use:

```jsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

This connects the Navbar to the routes.

The flow is:

```text
Click "About"
      ↓
<Link to="/about">
      ↓
URL becomes /about
      ↓
React Router checks Routes
      ↓
<Route path="/about" ...>
      ↓
About component renders
```

This is one of the most important concepts of React Router.

---

# 10. Link vs Route

Do not confuse these two.

### Route

Defines **what should render**.

```jsx
<Route path="/about" element={<About />} />
```

### Link

Defines **how the user navigates**.

```jsx
<Link to="/about">About</Link>
```

Think:

```text
Link
 ↓
Navigation

Route
 ↓
Rendering
```

---

# 11. Tailwind Layout I Used Today

I also worked with:

```jsx
<div className="flex flex-col justify-between h-screen">
```

### `flex`

Enables Flexbox.

### `flex-col`

Arranges children vertically.

```text
Navbar
  ↓
Routes
  ↓
Footer
```

### `justify-between`

Places available space between the children.

### `h-screen`

Makes the container approximately the height of the viewport.

---

# 12. `h-full` vs `h-screen`

### `h-full`

Means:

> Take the height of the parent.

It works properly when the parent has a defined height.

Example:

```jsx
<div className="h-screen">
  <div className="h-full">
  </div>
</div>
```

### `h-screen`

Means:

> Take the height of the viewport.

---

# 13. `flex-1`

For future projects, I can use:

```jsx
<div className="flex flex-col min-h-screen">

  <Navbar />

  <main className="flex-1">
    <Routes>
      ...
    </Routes>
  </main>

  <Footer />

</div>
```

`flex-1` tells the middle section to take the remaining available space.

This is useful for:

```text
Navbar
   ↓
Main Content
   ↓
Footer
```

---

# 14. Important React Router Concepts — Next

The next concepts I need to learn:

```text
Basic Routing
     ↓
Link
     ↓
NavLink
     ↓
Nested Routes
     ↓
Outlet
     ↓
Dynamic Routes
     ↓
useParams()
     ↓
useNavigate()
     ↓
404 / Not Found routes
```

---

# 15. NavLink

`NavLink` is similar to `Link`, but it is useful when we want to know whether the current route is active.

```jsx
<NavLink to="/about">About</NavLink>
```

It is especially useful for navigation bars because we can style the active link differently.

---

# 16. Dynamic Routes

Instead of creating separate routes:

```text
/user/1
/user/2
/user/3
```

we can create one dynamic route:

```jsx
<Route path="/user/:id" element={<User />} />
```

Now all of these can use the same component:

```text
/user/1
/user/2
/user/100
```

The `:id` is a **dynamic route parameter**.

---

# 17. `useParams()`

`useParams()` is used to get dynamic values from the URL.

Example URL:

```text
/user/25
```

Route:

```jsx
<Route path="/user/:id" element={<User />} />
```

Inside `User`:

```jsx
const { id } = useParams()
```

Now:

```text
id = 25
```

---

# 18. `useNavigate()`

`useNavigate()` is used when we want to navigate using JavaScript instead of clicking a `Link`.

```jsx
const navigate = useNavigate()

navigate("/about")
```

Useful example:

```text
Login successful
      ↓
navigate("/dashboard")
```

---

# 19. Outlet

`Outlet` is used for **nested routes**.

Example:

```text
Dashboard
 ├── Profile
 ├── Settings
 └── Orders
```

`Outlet` determines where the child route component should appear.

---

# 20. My Progress Today

### React Router

```text
✅ React Router DOM introduction
✅ SPA concept
✅ BrowserRouter
✅ Routes
✅ Route
✅ Link
✅ URL → Component concept
✅ Navbar component
✅ Home route
✅ About route
✅ Contact route
```

### Tailwind

```text
✅ flex
✅ flex-col
✅ justify-between
✅ h-screen
✅ h-full
✅ flex-1 concept
✅ underline
```

---

# 21. Important Concepts to Remember

### Routing Flow

```text
User clicks Link
       ↓
URL changes
       ↓
Routes checks available routes
       ↓
Matching Route is found
       ↓
Component renders
```

### `Link` vs `Route`

```text
<Link>
   ↓
Used for navigation

<Route>
   ↓
Used for rendering a component
```

### Router Hierarchy

```text
BrowserRouter
      ↓
   Routes
      ↓
    Route
      ↓
 Component
```

---

# 22. Final Definition for Revision

> **React Router DOM is a React library used to implement client-side routing, allowing different components to render for different URLs without a full page reload, making it useful for building Single Page Applications (SPAs).**

---

# Next Learning Order

```text
✅ BrowserRouter
✅ Routes
✅ Route
✅ Link

        ↓

🔜 NavLink
🔜 Nested Routes
🔜 Outlet
🔜 Dynamic Routes
🔜 useParams()
🔜 useNavigate()
🔜 404 / Not Found Route
🔜 Protected Routes
```
