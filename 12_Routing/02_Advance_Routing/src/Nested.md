# React Router DOM — Nested Routing

## 📌 What is Nested Routing?

**Nested Routing** means creating a route inside another route.

In React Router DOM, we can have a **parent route** and multiple **child routes**.

```text
/product
    │
    ├── /product/men
    ├── /product/women
    └── /product/kid
```

Here:

- `/product` → Parent Route
- `/product/men` → Child Route
- `/product/women` → Child Route
- `/product/kid` → Child Route

---

## 1. Basic Nested Route

```jsx
<Route path="/product" element={<Product />}>
  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
  <Route path="kid" element={<Kid />} />
</Route>
```

### Route hierarchy

```text
Product
│
├── Men
├── Women
└── Kid
```

The child routes are written **inside the parent route**.

---

## 2. Parent Route

```jsx
<Route path="/product" element={<Product />}>
```

This is the **parent route**.

When we visit:

```text
/product
```

React Router renders:

```jsx
<Product />
```

---

## 3. Child Routes

Inside the parent route:

```jsx
<Route path="men" element={<Men />} />
<Route path="women" element={<Women />} />
<Route path="kid" element={<Kid />} />
```

These are the **child routes**.

Because they are nested inside `/product`, their complete URLs become:

```text
/product/men
/product/women
/product/kid
```

### Important

We don't write `/` before the child path.

✅ Correct:

```jsx
<Route path="men" element={<Men />} />
```

❌ Avoid:

```jsx
<Route path="/men" element={<Men />} />
```

---

## 4. `<Outlet />`

`<Outlet />` is one of the most important concepts in nested routing.

It tells React Router:

> Render the matching child route here.

Example:

```jsx
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>

      <div className="flex justify-center gap-10 py-4">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
        <Link to="/product/kid">Kids</Link>
      </div>

      <Outlet />

    </div>
  )
}

export default Product
```

---

## 5. How `<Outlet />` Works

Suppose we visit:

```text
/product/men
```

React Router sees:

```text
/product
    ↓
Product
    ↓
/men
    ↓
Men
```

The `Men` component gets rendered where `<Outlet />` is located.

```text
Product Component
│
├── Navigation
│
└── <Outlet />
       │
       └── Men Component
```

---

## 6. Different Child Routes

### `/product/men`

```text
Product
   ↓
Outlet
   ↓
Men
```

### `/product/women`

```text
Product
   ↓
Outlet
   ↓
Women
```

### `/product/kid`

```text
Product
   ↓
Outlet
   ↓
Kid
```

The **Product component remains**, while the content inside `<Outlet />` changes.

---

## 7. Complete Example

### `App.jsx`

```jsx
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* Nested Routes */}
        <Route path="/product" element={<Product />}>

          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kid" element={<Kid />} />

        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </div>
  )
}

export default App
```

---

## 8. `Product.jsx`

```jsx
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className="text-black">

      {/* Navigation */}
      <div className="flex justify-center gap-10 py-4">

        <Link
          to="/product/men"
          className="text-lg font-medium underline"
        >
          Men
        </Link>

        <Link
          to="/product/women"
          className="text-lg font-medium underline"
        >
          Women
        </Link>

        <Link
          to="/product/kid"
          className="text-lg font-medium underline"
        >
          Kids
        </Link>

      </div>

      {/* Child route renders here */}
      <Outlet />

    </div>
  )
}

export default Product
```

---

## 9. Visual Structure

```text
App
│
├── Navbar
│
├── Routes
│   │
│   ├── /
│   │    └── Home
│   │
│   ├── /about
│   │    └── About
│   │
│   ├── /product
│   │    │
│   │    └── Product
│   │         │
│   │         ├── /men
│   │         │    └── Men
│   │         │
│   │         ├── /women
│   │         │    └── Women
│   │         │
│   │         └── /kid
│   │              └── Kid
│   │
│   └── *
│        └── NotFound
│
└── Footer
```

---

## 10. Why Use Nested Routing?

Nested routing is useful when multiple pages share a **common layout**.

For example:

```text
Dashboard
│
├── Sidebar
│
└── Outlet
     │
     ├── Profile
     ├── Settings
     ├── Orders
     └── Analytics
```

The sidebar stays the same.

Only the content inside `<Outlet />` changes.

---

## 11. Real-World Example

Imagine an e-commerce website:

```text
/products
│
├── /products/men
├── /products/women
├── /products/kids
└── /products/accessories
```

All these pages can share:

```text
Product Navigation
Search
Filters
Sorting
```

and the actual page content can be rendered through:

```jsx
<Outlet />
```

---

## 12. `Link` + Nested Routes

### Navigation

```jsx
<Link to="/product/men">Men</Link>
<Link to="/product/women">Women</Link>
<Link to="/product/kid">Kids</Link>
```

### Routes

```jsx
<Route path="/product" element={<Product />}>

  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
  <Route path="kid" element={<Kid />} />

</Route>
```

### Flow

```text
Click Men
   ↓
/product/men
   ↓
Product component
   ↓
Outlet
   ↓
Men component
```

---

## 13. Nested Routing vs Normal Routing

### Normal Routing

```jsx
<Route path="/product/men" element={<Men />} />
<Route path="/product/women" element={<Women />} />
<Route path="/product/kid" element={<Kid />} />
```

Each route is independent.

### Nested Routing

```jsx
<Route path="/product" element={<Product />}>

  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
  <Route path="kid" element={<Kid />} />

</Route>
```

The child routes are part of the `Product` route hierarchy.

---

## ⭐ Important Points to Remember

1. **Nested routing = route inside another route.**

2. The outer route is called the **parent route**.

3. Routes inside it are **child routes**.

4. Use `<Outlet />` inside the parent component.

5. `<Outlet />` is where the active child component is rendered.

6. Child paths don't need `/`:

```jsx
<Route path="men" />
```

7. Parent + child paths combine:

```text
/product + men
        ↓
/product/men
```

8. Nested routing is especially useful when several pages share the same layout.

---

## 🧠 Easy Way to Remember

Think of `<Outlet />` as a **placeholder**:

```text
Parent Component
│
│   Common UI
│
│   <Outlet />
│       ↑
│       │
│   Child Component
```

**Parent stays → Outlet changes → Child changes**

That is the core concept of **Nested Routing in React Router DOM**.
