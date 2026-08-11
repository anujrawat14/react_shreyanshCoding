# React API Calling

API calling in React means fetching data from an external server/API and using that data inside our React application.

There are two common ways to make API requests:

1. **Fetch API** — Built into JavaScript
2. **Axios** — Third-party HTTP client library

---

## 1. Fetch API

`fetch()` is built into JavaScript, so we don't need to install any package.

### Basic Fetch

```js
function getData() {
  const response = fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log("data aa gya");
  console.log(response);
}
```

### Important

`fetch()` is asynchronous, so it returns a **Promise**.

```js
const response = fetch(url);
```

The `response` is initially a Promise.

---

## 2. Using `async/await` with Fetch

We can make the function asynchronous and use `await`.

```js
async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log(response);
}
```

Now `response` contains the **Response object**.

---

## 3. Getting JSON Data from Fetch

Fetch does **not directly give us the JSON data**.

We need to use:

```js
response.json()
```

`.json()` is also asynchronous, so we use `await`.

```js
const getData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();

  console.log(data);
};
```

### Flow

```text
fetch(url)
    ↓
Response Object
    ↓
response.json()
    ↓
Actual JavaScript Data
```

### Important

This:

```js
console.log(response.json());
```

does **not** directly give the data because `.json()` also returns a Promise.

Therefore:

```js
const data = await response.json();
```

is used.

---

# 4. Axios

Axios is a **third-party HTTP client library**.

Install Axios:

```bash
npm install axios
```

Import Axios:

```js
import axios from "axios";
```

---

## 5. Basic Axios Request

```js
const getData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(response);
};
```

Axios returns an object containing properties such as:

```js
{
  data: [...],
  status: 200,
  headers: {...}
}
```

The actual API data is available using:

```js
response.data
```

Example:

```js
console.log(response.data);
```

---

# 6. Axios Automatically Parses JSON

With Fetch:

```js
const response = await fetch(url);
const data = await response.json();
```

With Axios:

```js
const response = await axios.get(url);

console.log(response.data);
```

We don't need to call `.json()` with Axios.

---

# 7. Destructuring with Axios

Since Axios stores the actual response data inside the `data` property, we can destructure it.

Instead of:

```js
const response = await axios.get(url);

console.log(response.data);
```

we can write:

```js
const { data } = await axios.get(url);

console.log(data);
```

This is called **object destructuring**.

---

# 8. Why Fetch Cannot Destructure `data` Directly

This will NOT work:

```js
const { data } = await fetch(url);
```

because `fetch()` returns a **Response object**, and the Response object does not have a `data` property containing the parsed API data.

We have to do:

```js
const response = await fetch(url);

const data = await response.json();
```

However, we can destructure actual properties of the Response object:

```js
const { status, ok } = await fetch(url);

console.log(status);
console.log(ok);
```

---

# 9. Fetch vs Axios

| Feature                       | Fetch             | Axios                 |
| ----------------------------- | ----------------- | --------------------- |
| Type                          | Built-in Web API  | Third-party library   |
| Installation                  | Not required      | Required              |
| Returns                       | Response object   | Axios response object |
| JSON parsing                  | Manual            | Automatic             |
| Get JSON data                 | `response.json()` | `response.data`       |
| Destructure API data directly | ❌                 | ✅                     |

### Fetch

```js
const response = await fetch(url);
const data = await response.json();
```

### Axios

```js
const { data } = await axios.get(url);
```

---

# 10. Storing API Data in React State

We can store API data using `useState`.

```js
const [data, setData] = useState([]);
```

Here:

```text
data     → Current state
setData  → Function used to update state
[]       → Initial value
```

---

# 11. Getting Data from an API

Example using the Picsum API:

```js
const getData = async () => {
  const response = await axios.get(
    "https://picsum.photos/v2/list"
  );

  console.log(response.data);
};
```

The API returns an array of objects:

```js
[
  {
    id: "0",
    author: "Alejandro Escamilla"
  },
  {
    id: "1",
    author: "Paul Jarvis"
  }
]
```

---

# 12. Adding API Data to State

### Replacing the existing state

```js
setData(response.data);
```

This replaces the old state with the API response.

---

### Adding API data to existing state

```js
setData([...data, ...response.data]);
```

Both `data` and `response.data` are arrays.

Example:

```js
data = [A, B];

response.data = [C, D];
```

After:

```js
setData([...data, ...response.data]);
```

The result is:

```js
[A, B, C, D]
```

### Why two spread operators?

```js
[...data, ...response.data]
```

* `...data` → spreads the old array
* `...response.data` → spreads the new API array

---

# 13. Recommended React State Update

When the new state depends on the previous state, use the functional form:

```js
setData(prevData => [
  ...prevData,
  ...response.data
]);
```

This is preferred because React may batch state updates.

---

# 14. Rendering API Data with `.map()`

Once the API data is stored in state, we can render it using `.map()`.

```jsx
{
  data.map((elem, idx) => (
    <div key={elem.id}>
      The name of author is: {elem.author}
    </div>
  ))
}
```

`.map()` runs through every element of the array and returns JSX for each element.

---

# 15. Understanding `map()` Parameters

```js
data.map((elem, idx) => ...)
```

### `elem`

Represents the current element.

```js
elem.author
```

gets the author's name.

### `idx`

Represents the current index.

```js
idx
```

Example:

```text
elem → current object
idx  → current index
```

---

# 16. React `key`

When rendering a list, React requires a unique `key`.

### Using index

```jsx
data.map((elem, idx) => (
  <div key={idx}>
    {elem.author}
  </div>
))
```

This works, but using the index as a key is generally not preferred when the data has a unique ID.

### Better approach

```jsx
data.map((elem) => (
  <div key={elem.id}>
    {elem.author}
  </div>
))
```

For the Picsum API, `elem.id` is a better key.

### Important Difference

```jsx
<div key={elem.id}>
```

`key` is used internally by React.

While:

```jsx
{idx}
```

is something you can actually display on the page.

---

# 17. Complete Example

```jsx
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list"
    );

    console.log(response.data);

    setData(prevData => [
      ...prevData,
      ...response.data
    ]);
  };

  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>

      {
        data.map((elem, idx) => (
          <div key={elem.id}>
            The name of author is: {elem.author},
            with index {idx}
          </div>
        ))
      }
    </div>
  );
};

export default App;
```

---

# 18. Quick Revision

```text
                    API CALLING
                         │
             ┌───────────┴───────────┐
             │                       │
           Fetch                   Axios
             │                       │
       fetch(url)              axios.get(url)
             │                       │
       Response Object        Axios Response
             │                       │
    response.json()             response.data
             │                       │
             └───────────┬───────────┘
                         │
                    API Data
                         │
                    useState([])
                         │
                     setData()
                         │
                    data.map()
                         │
                       JSX
```

## Key Points to Remember

* `fetch()` is built into JavaScript.
* Axios is a third-party HTTP client library.
* `fetch()` returns a **Response object**.
* Fetch requires `response.json()` to get the actual JSON data.
* Axios automatically parses JSON.
* Axios provides the parsed data through `response.data`.
* Axios allows direct destructuring:

```js
const { data } = await axios.get(url);
```

* `setData(response.data)` replaces the state.
* `setData([...data, ...response.data])` combines two arrays.
* Prefer `setData(prevData => [...prevData, ...response.data])` when depending on previous state.
* `.map()` is used to render arrays in React.
* Use a unique value such as `elem.id` for React's `key` when possible.
