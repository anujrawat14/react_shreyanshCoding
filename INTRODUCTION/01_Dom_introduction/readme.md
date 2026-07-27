# React Introduction

## 1. Library vs Framework

### Library
A library is a collection of pre-written code that helps us solve specific problems.

- Developer controls the flow.
- More customization.
- We can add libraries according to our needs.

Examples:
- ReactJS → UI development
- GSAP → Animation
- Lenis → Smooth scrolling

### Framework
A framework provides a complete structure for building applications.

- Has predefined rules.
- Provides built-in features.
- Less customization compared to libraries.

Examples:
- Next.js
- Angular

### Difference

| Library | Framework |
|---|---|
| Developer controls the flow | Framework controls the flow |
| More flexible | Rules are fixed |
| Add features manually | Many features are built-in |
| Example: React | Example: Next.js, Angular |


---

# 2. DOM Manipulation

Before React, we directly manipulated the DOM using JavaScript.

Example:

```javascript
const h1 = document.createElement("h1");

h1.innerHTML = "Hello from JS";

const div = document.getElementById("root");

div.appendChild(h1);