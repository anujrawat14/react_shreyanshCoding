# Dynamic Routing in React Router DOM

Dynamic Routing is used when we want to create a route where a part of the URL can change dynamically.

For example:

```text
/courses/react
/courses/java
/courses/python
/courses/javascript
```

Instead of creating a separate route for every course, we can create one dynamic route:

```jsx
<Route path="/courses/:id" element={<CourseDetail />} />
```

---

## 1. What is Dynamic Routing?

In dynamic routing, a part of the URL is treated as a **parameter**.

Example:

```jsx
<Route path="/courses/:id" element={<CourseDetail />} />
```

Here:

```text
/courses/123
         ↑
       dynamic
       parameter
```

`:id` is called a **route parameter**.

It can contain different values:

```text
/courses/101
/courses/react
/courses/java
/courses/python
```

All of these URLs will render the same component:

```jsx
<CourseDetail />
```

---

## 2. Dynamic Route Syntax

The basic syntax is:

```jsx
<Route path="/path/:parameter" element={<Component />} />
```

Example:

```jsx
<Route path="/courses/:id" element={<CourseDetail />} />
```

Here:

- `/courses` → fixed part
- `:id` → dynamic part
- `CourseDetail` → component that will be rendered

---

## 3. Complete Example

### App.jsx

```jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        {/* Dynamic Routing */}
        <Route
          path="/courses/:id"
          element={<CourseDetail />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  )
}

export default App
```

---

## 4. useParams()

React Router DOM provides a special hook called:

```jsx
useParams()
```

It is used to get the values of dynamic parameters from the URL.

Import it:

```jsx
import { useParams } from 'react-router-dom'
```

Then:

```jsx
const params = useParams()
```

---

## 5. Example of useParams()

Suppose our route is:

```jsx
<Route path="/courses/:id" element={<CourseDetail />} />
```

And the URL is:

```text
/courses/react
```

Then:

```jsx
const params = useParams()

console.log(params)
```

Output:

```js
{
  id: "react"
}
```

We can access the value using:

```jsx
params.id
```

---

## 6. CourseDetail Component

```jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  // special hook provided by React Router DOM
  const params = useParams()

  console.log(params)

  return (
    <div>
      <h1>
        Course detail page is of: {params.id}
      </h1>
    </div>
  )
}

export default CourseDetail
```

---

## 7. What Happens Internally?

Suppose we have:

```jsx
<Route path="/courses/:id" element={<CourseDetail />} />
```

And the user visits:

```text
/courses/react
```

React Router matches the route:

```text
/courses/:id
```

Then:

```text
:id = react
```

`useParams()` gives:

```js
{
  id: "react"
}
```

Therefore:

```jsx
params.id
```

gives:

```text
react
```

---

## 8. Different URLs

The same route can handle many different URLs.

### URL

```text
/courses/react
```

Result:

```js
params.id
// "react"
```

### URL

```text
/courses/java
```

Result:

```js
params.id
// "java"
```

### URL

```text
/courses/python
```

Result:

```js
params.id
// "python"
```

### URL

```text
/courses/101
```

Result:

```js
params.id
// "101"
```

Notice that URL parameters are returned as **strings**.

---

## 9. Destructuring useParams()

Instead of:

```jsx
const params = useParams()

console.log(params.id)
```

we can directly destructure the parameter:

```jsx
const { id } = useParams()
```

Then use:

```jsx
<h1>Course detail page is of: {id}</h1>
```

This is cleaner.

Example:

```jsx
const CourseDetail = () => {

  const { id } = useParams()

  return (
    <div>
      <h1>
        Course detail page is of: {id}
      </h1>
    </div>
  )
}
```

---

## 10. Multiple Dynamic Parameters

We can have more than one dynamic parameter.

Example:

```jsx
<Route
  path="/courses/:courseId/:chapterId"
  element={<Chapter />}
/>
```

URL:

```text
/courses/react/5
```

Then:

```jsx
const { courseId, chapterId } = useParams()
```

Output:

```js
courseId
// "react"

chapterId
// "5"
```

---

## 11. Dynamic Routing vs Normal Routing

### Normal Routing

```jsx
<Route path="/courses" element={<Courses />} />
```

Only matches:

```text
/courses
```

### Dynamic Routing

```jsx
<Route
  path="/courses/:id"
  element={<CourseDetail />}
/>
```

Can match:

```text
/courses/react
/courses/java
/courses/python
/courses/101
```

---

## 12. Dynamic Routing Example

Imagine we have these courses:

```js
const courses = [
  {
    id: 1,
    name: "React"
  },
  {
    id: 2,
    name: "Java"
  },
  {
    id: 3,
    name: "Python"
  }
]
```

We can create links:

```jsx
<Link to="/courses/1">React</Link>

<Link to="/courses/2">Java</Link>

<Link to="/courses/3">Python</Link>
```

And use one dynamic route:

```jsx
<Route
  path="/courses/:id"
  element={<CourseDetail />}
/>
```

Then:

```text
/courses/1 → CourseDetail
/courses/2 → CourseDetail
/courses/3 → CourseDetail
```

The `id` changes, but the component remains the same.

---

## 13. Important Difference: `:id` vs `params.id`

In the route:

```jsx
<Route path="/courses/:id" />
```

`:id` defines the parameter.

Inside the component:

```jsx
const params = useParams()
```

we access it using:

```jsx
params.id
```

So:

```text
Route
/courses/:id
        ↓
defines parameter

URL
/courses/react
        ↓
actual value

useParams()
        ↓
{ id: "react" }

params.id
        ↓
"react"
```

---

## 14. Important Rules

### Rule 1

Use `:` to define a dynamic parameter.

```jsx
/courses/:id
```

### Rule 2

Use `useParams()` to access it.

```jsx
const params = useParams()
```

### Rule 3

Access the parameter using its name.

```jsx
params.id
```

### Rule 4

Parameters are strings.

```text
/courses/100
```

gives:

```js
{
  id: "100"
}
```

not:

```js
{
  id: 100
}
```

If you need a number:

```jsx
const id = Number(params.id)
```

---

## 15. Quick Revision

```text
Dynamic Routing
      ↓
Route contains dynamic parameter
      ↓
/courses/:id
      ↓
User visits
/courses/react
      ↓
useParams()
      ↓
{ id: "react" }
      ↓
params.id
      ↓
"react"
```

### Most Important Code

```jsx
<Route
  path="/courses/:id"
  element={<CourseDetail />}
/>
```

```jsx
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const { id } = useParams()

  return (
    <h1>
      Course detail page is of: {id}
    </h1>
  )
}
```

---

## One-Line Definition

> **Dynamic Routing allows us to create routes with changing URL parameters using `:parameter`, and `useParams()` is used to access those parameters inside the component.**
