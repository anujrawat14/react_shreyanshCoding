# React Notes - Vite

## Vite

* Vite is a modern build tool and development server used to create React projects.
* It provides faster startup and Hot Module Replacement (HMR) than Create React App.
* Vite is the recommended tool for creating new React applications.

## Create React App (CRA)

* Create React App (CRA) was previously the standard tool for creating React projects.
* Vite has become the preferred choice because of its speed and better developer experience.

## Project Structure

* `src` is the main folder where the application code is written.
* `public` contains static assets that do not need processing by Vite.

## `rafce`

* `rafce` is a VS Code snippet that generates the boilerplate code for a React Functional Component.

## JSX Rules

* A React component must return a single parent element.
* Multiple elements can be wrapped inside:

  * A parent element (`div`, `section`, etc.)
  * A React Fragment (`<>...</>`)

## ESLint

* ESLint is a tool used to identify errors and enforce coding standards.
* It helps maintain clean, consistent, and readable code.
* Custom linting rules can be configured for collaborative projects.

## `.gitignore`

* `.gitignore` specifies files and folders that Git should ignore.
* Ignored files are not tracked or pushed to GitHub.
* Common ignored folders include `node_modules` and `dist`.

## `package.json`

* Contains project metadata.
* Stores project dependencies.
* Defines scripts such as `dev`, `build`, and `preview`.
* Maintains package versions and configuration.

## `vite.config.js`

* Configuration file for Vite.
* Used to customize the development server and build process.
* Supports plugins, path aliases, and other project-specific settings.
