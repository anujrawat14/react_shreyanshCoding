# CSS Modules in React

## Why do we need CSS Modules?

In normal CSS, all class names are **global**. If two components use the same class name, their styles can overwrite each other, causing unexpected results.

CSS Modules solve this problem by making CSS **local to each component**. React automatically generates unique class names, so styles do not conflict.

## Benefits

- Prevents class name conflicts.
- Keeps styles limited to their own component.
- Makes code easier to organize.
- Improves maintainability in large projects.
- Allows developers to use common class names without worrying about collisions.

## Key Point

Use CSS Modules whenever you want **component-specific styling** without affecting other parts of your React application.