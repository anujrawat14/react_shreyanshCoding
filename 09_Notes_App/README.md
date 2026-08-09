# 📝 React Notes App

A simple and responsive **Notes App** built using **React.js** and **Tailwind CSS**.

Users can add notes with a title and description, and the notes are displayed as cards in the Recent Notes section.

## 🚀 Features

* Add a new note
* Add note title and details
* Display notes dynamically using React state
* Responsive layout
* Background image for note cards
* Form handling with `useState`
* Responsive borders using Tailwind CSS

## 🛠️ Tech Stack

* React.js
* Tailwind CSS
* JavaScript
* Vite

## 📂 Project Structure

```text
src/
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 💡 How It Works

The project uses React's `useState` hook to manage:

* Note title
* Note details
* List of notes

When the user submits the form, the note is added to the `task` array and rendered using `.map()`.

## 📱 Responsive Design

The layout changes according to the screen size:

* **Small screens:** Sections are arranged vertically and the border appears at the top.
* **Large screens:** Sections are arranged side-by-side and the border appears on the left.

Tailwind CSS responsive utilities are used to achieve this.

## 📸 Preview

Add a screenshot of your project here:

```text
![React Notes App](./screenshot.png)
```

## 👨‍💻 Author

**Anuj Rawat**

Built while learning React.js and Tailwind CSS.
