# Task Manager

## Overview

The **Task Manager** is a Node.js module for managing tasks. It allows you to:

- Add tasks with descriptions and due dates.
- Mark tasks as completed.
- List tasks with filtering options (completed or pending).
- Delete tasks by their unique ID.

Includes Jest tests for ensuring module functionality.

---

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:  
   [https://github.com/Keyur2311/os-assignment.git](https://github.com/Keyur2311/os-assignment.git)
2. Navigate to the project directory:
   ```bash
   cd os-assignment
   ```
3. Install required dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   node index.js
   ```

---

## Usage

To see the module in action, run the example file.

### Features

- **Add tasks** with details and deadlines.
- **Mark tasks** as done or **view them by status**.
- **Remove tasks** by ID.

---

## Testing

Run unit tests using Jest to validate functionality.

**Tests cover:**

- Adding tasks
- Completing tasks
- Filtering tasks
- Deleting tasks
- Handling invalid operations

---

## GitHub Copilot Usage Examples

**1. Adding Tasks:**  
GitHub Copilot helped generate the `addTask` function, streamlining the creation of tasks with a unique ID, description, and due date.

**2. Marking Tasks as Completed:**  
Copilot provided the logic for marking tasks as completed based on their unique ID, simplifying error handling for invalid IDs.

**3. Writing Jest Tests:**  
Copilot assisted in generating Jest test cases, ensuring task operations like adding and marking tasks were covered effectively.
