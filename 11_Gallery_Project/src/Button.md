# API Fetching using Button

This project demonstrates how to fetch API data in React using **Axios** and a button click.

## Concept

The API request is made when the user clicks the **Get Data** button.

## Flow

```text
Button Click
     ↓
getData()
     ↓
Axios API Request
     ↓
response.data
     ↓
setUserData()
     ↓
Component Re-renders
```

## Code

```jsx
import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=2&limit=30'
    );

    setUserData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>

      {userData.map((elem, idx) => (
        <div key={idx}>
          <h1>Photo {idx + 1}</h1>
          <img
            src={elem.download_url}
            alt={elem.author}
          />
        </div>
      ))}
    </div>
  )
}

export default App
```

## Important Points

* `useState([])` stores the API data.
* `axios.get()` sends the GET request.
* `response.data` contains the actual API data.
* `setUserData(response.data)` updates the state.
* `onClick={getData}` calls the API when the button is clicked.
* After state updates, React re-renders the component.
* `map()` is used to display the API data.

## Remember

```js
onClick={getData}
```

means the function runs when the button is clicked.

Do **not** write:

```js
onClick={getData()}
```

because that calls the function immediately during rendering.
