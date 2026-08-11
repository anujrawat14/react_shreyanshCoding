import React from "react";

const App = () => {
  // =========================================================
  // LOCAL STORAGE & SESSION STORAGE
  // =========================================================

  // Clear all data stored in Local Storage
  // localStorage.clear();

  // Clear all data stored in Session Storage
  // sessionStorage.clear();


  // =========================================================
  // SAVING DATA IN LOCAL STORAGE
  // =========================================================

  // localStorage stores data in KEY-VALUE pairs.
  // Both key and value are stored as strings.

  // Save data
  // localStorage.setItem("user", "sarthak");
  // localStorage.setItem("age", 18);

  // Get data
  // const user = localStorage.getItem("user");

  // Remove a particular item
  // localStorage.removeItem("age");

  // Print the retrieved value
  // console.log(user);


  // =========================================================
  // SAVING AN ARRAY IN LOCAL STORAGE
  // =========================================================

  // Arrays are NOT stored directly as arrays.
  // JavaScript converts the array into a string automatically.

  // const arr = [1, 2, 3, 4, 5, 6, 7];

  // This will store the array as:
  // "1,2,3,4,5,6,7"

  // localStorage.setItem("user", arr);


  // =========================================================
  // SAVING AN OBJECT IN LOCAL STORAGE
  // =========================================================

  // const userObj = {
  //   userName: "anuj",
  //   age: 20,
  //   city: "chamoli",
  // };

  // ❌ Don't store an object directly.
  // It will be converted into:
  // "[object Object]"

  // localStorage.setItem("user", userObj);


  // =========================================================
  // JSON.stringify()
  // =========================================================

  // JSON.stringify() converts a JavaScript object/array
  // into a JSON string so that it can be stored properly.

  // localStorage.setItem("user", JSON.stringify(userObj));


  // =========================================================
  // GETTING OBJECT FROM LOCAL STORAGE
  // =========================================================

  // getItem() always returns a STRING. 
  //parse is used to make  string to object
  const userObj1 = localStorage.getItem("user");

  console.log(
    userObj1,
    "its type is:",
    typeof userObj1
  );


  // =========================================================
  // JSON.parse()
  // =========================================================

  // JSON.parse() converts the JSON string back into
  // a JavaScript object.

  const userObj2 = JSON.parse(localStorage.getItem("user"));

  console.log(
    userObj2,
    "its type is:",
    typeof userObj2
  );


  return (
    <div>App</div>
  );
};

export default App;