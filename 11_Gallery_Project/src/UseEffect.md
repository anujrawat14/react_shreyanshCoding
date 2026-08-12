# API Fetching using useEffect

This project demonstrates how to fetch API data automatically when a React component loads using **useEffect** and **Axios**.

## Concept

The API request is made automatically when the component mounts.

## Flow

```text
Component Mounts
       ↓
useEffect Runs
       ↓
API Request
       ↓
response.data
       ↓
setUserData()
       ↓
Component Re-renders
       ↓
Data Displayed
```

## Code

```jsx
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Gallery = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const response = await axios.get(
        'https://picsum.photos/v2/list?page=2&limit=10'
      );

      setUserData(response.data);
    }

    getData();

  }, []);

  return (
    <div className='grid grid-cols-4 gap-5'>

      {userData.map((elem, idx) => (
        <div key={idx}>

          <a
            href={elem.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='h-40 w-44 overflow-hidden rounded-xl'>
              <img
                className='h-full w-full object-cover'
                src={elem.download_url}
                alt={elem.author}
              />
            </div>
          </a>

          <h1 className='font-bold text-lg'>
            {elem.author}
          </h1>

        </div>
      ))}

    </div>
  )
}

export default Gallery
```

## Important Points

* `useEffect()` is used for side effects such as API calls.
* `[]` means the effect runs after the component mounts.
* Axios is used to make the API request.
* `response.data` contains the API data.
* `setUserData(response.data)` stores the data in state.
* When state changes, React re-renders.
* `userData.map()` displays the data.

## Important Syntax

Do **not** make the `useEffect` callback directly `async`:

```js
useEffect(async () => {
  // ❌ Avoid this
}, []);
```

Instead, create an async function inside the effect:

```js
useEffect(() => {

  const getData = async () => {
    const response = await axios.get("API_URL");
    setUserData(response.data);
  }

  getData();

}, []);
```

## Dependency Array

```js
useEffect(() => {
  // code
}, []);
```

The empty dependency array means the effect runs **once after the initial render/mount**.

## Remember

`useEffect` is commonly used when you want something to happen automatically after rendering, such as:

* API calls
* Fetching data
* Event listeners
* Timers
* Subscriptions
