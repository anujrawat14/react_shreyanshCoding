# React Hooks

## What are Hooks?

Hooks are built-in React functions that let you use state, lifecycle features, and other React capabilities inside functional components.

---

# Important React Hooks

## 1. useState()

**Purpose:** Manage local state within a component.

**Common Use Cases**
- Counter
- Toggle
- Forms
- Shopping Cart
- UI State

---

## 2. useEffect()

**Purpose:** Perform side effects after rendering.

**Common Use Cases**
- API Calls
- Fetching Data
- Timers
- Event Listeners
- DOM Manipulation
- Cleanup Operations

---

## 3. useContext()

**Purpose:** Share data across multiple components without prop drilling.

**Common Use Cases**
- Authentication
- Theme
- Language
- User Information
- Global Settings

---

## 4. useReducer()

**Purpose:** Manage complex state with predictable state transitions.

**Common Use Cases**
- Shopping Cart
- Todo Application
- Multi-step Forms
- Complex State Logic

---

## 5. useRef()

**Purpose:** Store mutable values and access DOM elements without causing re-renders.

**Common Use Cases**
- DOM Access
- Focus Input
- Store Previous Value
- Timer IDs
- Scroll Position

---

## 6. useMemo()

**Purpose:** Cache expensive calculations to improve performance.

**Common Use Cases**
- Filtering Large Lists
- Sorting Data
- Expensive Computations
- Performance Optimization

---

## 7. useCallback()

**Purpose:** Cache functions to avoid unnecessary re-creation.

**Common Use Cases**
- Passing Functions to Child Components
- Preventing Unnecessary Re-renders
- Performance Optimization

---

# Hooks Summary

| Hook | Purpose |
|------|---------|
| **useState** | Manage local component state |
| **useEffect** | Handle side effects |
| **useContext** | Share global state |
| **useReducer** | Manage complex state |
| **useRef** | Access DOM & store mutable values |
| **useMemo** | Cache expensive calculations |
| **useCallback** | Cache functions |

---

# Recommended Learning Order

1. useState
2. useEffect
3. useRef
4. useContext
5. useReducer
6. useMemo
7. useCallback

---

# Quick Interview Revision

- **useState** → Local State
- **useEffect** → Side Effects
- **useContext** → Global State
- **useReducer** → Complex State
- **useRef** → DOM Access & Mutable Values
- **useMemo** → Optimize Expensive Calculations
- **useCallback** → Optimize Functions