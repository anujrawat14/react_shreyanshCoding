# React Router DOM — useParams Hook

## What is `useParams()`?

`useParams()` is a hook provided by **React Router DOM** that is used to access **dynamic parameters from the URL**.

It is mainly used with dynamic routes such as:

```jsx
<Route path="/course/:id" element={<CourseDetail />} />
```

Here, `:id` is a **dynamic parameter**.

---

## Import

```jsx
import { useParams } from 'react-router-dom'
```

---

# Dynamic Route

Suppose we have:

```jsx
<Route path="/course/:id" element={<CourseDetail />} />
```

The `:id` part can change.

For example:

```text
/course/java
/course/react
/course/python
/course/javascript
```

The same component can handle all of these URLs.

---

# Using `useParams()`

Inside the component:

```jsx
const params = useParams()
```

Suppose the URL is:

```text
/course/java
```

Then:

```jsx
console.log(params)
```

will give:

```js
{
    id: "java"
}
```

Therefore:

```jsx
params.id
```

will return:

```text
java
```

---

# Example

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
                Course detail page is of : {params.id}
            </h1>
        </div>
    )
}

export default CourseDetail
```

---

# Cleaner Approach — Destructuring

Instead of:

```jsx
const params = useParams()

params.id
```

we can directly extract `id`:

```jsx
const { id } = useParams()
```

Then use:

```jsx
{id}
```

Example:

```jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const { id } = useParams()

    return (
        <div>
            <h1>
                Course detail page is of : {id}
            </h1>
        </div>
    )
}

export default CourseDetail
```

---

# Multiple Dynamic Parameters

We can have more than one dynamic parameter.

```jsx
<Route
    path="/course/:courseId/lesson/:lessonId"
    element={<Lesson />}
/>
```

URL:

```text
/course/react/lesson/5
```

Then:

```jsx
const { courseId, lessonId } = useParams()
```

Result:

```js
courseId = "react"
lessonId = "5"
```

---

# Example with Multiple Parameters

```jsx
const Lesson = () => {

    const { courseId, lessonId } = useParams()

    return (
        <div>
            <h1>Course: {courseId}</h1>
            <h2>Lesson: {lessonId}</h2>
        </div>
    )
}
```

For:

```text
/course/react/lesson/5
```

Output:

```text
Course: react
Lesson: 5
```

---

# Important Points

- `useParams()` is provided by `react-router-dom`.
- It is used to **read dynamic values from the URL**.
- Dynamic parameters are created using `:parameterName`.
- The returned values are strings.
- `useParams()` must be used inside a component rendered within a Router.
- It is commonly used for product details, course details, user profiles, blog posts, etc.

---

# Real-World Example

A product website can use:

```jsx
<Route
    path="/product/:productId"
    element={<ProductDetail />}
/>
```

If the user visits:

```text
/product/101
```

then:

```jsx
const { productId } = useParams()
```

gives:

```text
productId = "101"
```

We can then use that ID to fetch the product's data.

---

# `useParams()` Flow

```text
URL
 ↓
/course/react
 ↓
Route
 ↓
/course/:id
 ↓
useParams()
 ↓
{ id: "react" }
 ↓
params.id
 ↓
"react"
```

---

# One-Line Definition

> `useParams()` is a React Router DOM hook used to access dynamic parameters from the current URL.
