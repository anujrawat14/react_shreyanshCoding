# React Pagination & Infinite Scrolling

This project demonstrates two different approaches for loading API data in React:

- **Pagination**
- **Infinite Scrolling**

API used:

```text
https://picsum.photos/v2/list
```

---

## 📌 1. Pagination

Pagination loads a fixed number of items for a particular page.

### Concept

```text
Page 1 → 50 cards
Page 2 → 50 cards
Page 3 → 50 cards
```

When the user clicks **Next**, the page number increases and new data is fetched.

### Main Logic

```jsx
const [index, setIndex] = useState(1);

const getData = async () => {
    const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=50`
    );

    setUserData(response.data);
};

useEffect(() => {
    getData();
}, [index]);
```

### Next Button

```jsx
<button
    onClick={() => {
        setIndex(prev => prev + 1);
        setUserData([]);
    }}
>
    Next
</button>
```

### Previous Button

```jsx
{index > 1 && (
    <button
        onClick={() => {
            setIndex(prev => prev - 1);
            setUserData([]);
        }}
    >
        Prev
    </button>
)}
```

### Important Point

Pagination **replaces** the previous page's data:

```js
setUserData(response.data);
```

So only the current page is displayed.

---

# 📌 2. Infinite Scrolling

Infinite scrolling automatically loads the next page when the user reaches the bottom of the page.

### Concept

```text
Page 1
   ↓
Scroll to bottom
   ↓
Page 2
   ↓
Scroll to bottom
   ↓
Page 3
   ↓
...
```

There are no Next/Previous buttons.

### Main Logic

```jsx
const [index, setIndex] = useState(1);
const [loading, setLoading] = useState(false);

const getData = async () => {
    setLoading(true);

    const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=50`
    );

    setUserData(prev => [...prev, ...response.data]);

    setLoading(false);
};
```

### Detecting Scroll

```jsx
const handleScroll = (e) => {

    const {
        scrollTop,
        clientHeight,
        scrollHeight
    } = e.target;

    if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        !loading
    ) {
        setIndex(prev => prev + 1);
    }
};
```

Use it on the scrollable container:

```jsx
<div
    className="overflow-auto h-screen"
    onScroll={handleScroll}
>
```

### Important Point

Unlike pagination, infinite scrolling **appends** the new data:

```js
setUserData(prev => [...prev, ...response.data]);
```

So:

```text
Page 1 → 50 cards
Page 2 → 100 cards total
Page 3 → 150 cards total
```

---

# 🔑 Important Difference in Code

### Pagination

```js
setUserData(response.data);
```

➡️ Replaces old data.

### Infinite Scrolling

```js
setUserData(prev => [...prev, ...response.data]);
```

➡️ Keeps old data and adds new data.

---

## Loading State

For API loading:

```jsx
const [loading, setLoading] = useState(false);
```

Before API request:

```js
setLoading(true);
```

After API request:

```js
setLoading(false);
```

Then:

```jsx
{loading && <h3>Loading...</h3>}
```

The loading state can also be used to prevent another request while the current request is still running.

---

## 🧠 Key Concepts Learned

- `useState`
- `useEffect`
- Axios API requests
- API pagination using `page` and `limit`
- Conditional rendering
- Loading states
- Scroll event handling
- `scrollTop`
- `clientHeight`
- `scrollHeight`
- Functional state updates
- Array spread operator
- Appending API data
- React `key` prop

---

## ⚡ Quick Revision

```text
PAGINATION

index changes
     ↓
API fetches page
     ↓
setUserData(response.data)
     ↓
Replace old cards


INFINITE SCROLLING

Scroll reaches bottom
     ↓
index increases
     ↓
API fetches next page
     ↓
setUserData(prev => [...prev, ...data])
     ↓
Add new cards to existing cards
```
