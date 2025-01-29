# Todo List App

A simple and interactive Todo List application built with **React, TypeScript, and Tailwind CSS**. This app allows users to add, edit, delete, and mark tasks as completed. The tasks are saved in **localStorage**, so they persist even after a page refresh.

## Features

- ✅ **Add Tasks**: Enter a task in the input field and press `Enter` or click the **Add** button.
- ✏️ **Edit Tasks**: Click the edit icon to update a task.
- 🗑️ **Delete Tasks**: Remove a task by clicking the delete icon.
- ✔️ **Mark as Complete**: Click on a task to toggle its completed state.
- 💾 **Persistent Storage**: Tasks are stored in **localStorage**, so they remain after reloading the page.

## Live Preview

    ```sh

https://afnan-to-do-list.vercel.app

````

## Installation

1. Clone the repository:

```sh
git clone https://github.com/Rasel105/AFNAN-To-Do-List
cd AFNAN-To-Do-List
````

2. Install dependencies:

   ```sh
   yarn install
   # or
   npm install
   ```

3. Start the development server:

   ```sh
   yarn dev
   # or
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173/`

## Project Structure

```
📦 todo-list-app
├── 📂 src
│   ├── 📂 components
│   │   ├── AddTask.tsx  # Input field to add a task
│   │   ├── TaskItem.tsx # Individual task component
│   │   ├── TaskList.tsx # List of tasks
│   ├── 📂 types
│   │   ├── task.ts     # Task interface
│   ├── App.tsx         # Main App component
│   ├── index.tsx       # React entry point
├── 📜 package.json     # Dependencies and scripts
├── 📜 README.md        # Project documentation
```

## Technologies Used

- **React**
- **Tailwind CSS**
- **React Icons**
- **UUID**
- **LocalStorage**

## How It Works

1. Type a task in the input field and press `Enter` or click the **Add** button.
2. Click on a task to **mark it as completed**.
3. Click the **edit icon** ✏️ to modify a task and press `Enter` to save.
4. Click the **delete icon** 🗑️ to remove a task.

---

Made with ❤️ by Azadul Islam Rasel
