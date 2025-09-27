# [To-Do List Web App](https://minuwu.github.io/todoApp/)


## Overview

This is a lightweight and interactive **To-Do List application** built using plain JavaScript, HTML, and CSS. The app demonstrates dynamic DOM manipulation, event handling, and deletion of items with both button clicks and icon clicks.

The project is designed to be minimal, easy to understand, and extendable. It covers essential JavaScript concepts such as event propagation and event bubbling, creating elements, appending them to the DOM, attaching event listeners, and handling user input.

[**Visit the live site**](https://minuwu.github.io/todoApp/)

---

## Screenshots

<div align="center">

![todo-app](https://raw.githubusercontent.com/minuwu/todoApp/refs/heads/main/gitAssets/(3).png)

![todo-app](https://raw.githubusercontent.com/minuwu/todoApp/refs/heads/main/gitAssets/(2).png)

![todo-app](https://raw.githubusercontent.com/minuwu/todoApp/refs/heads/main/gitAssets/(1).png)



</div>

---

## Features

* Add new to-do items by pressing **Enter** or clicking the **Add button**.
* Delete tasks using either the **trash button** or the **trash icon** inside the button.
* Event delegation for efficient handling of click events on dynamically created elements.
* Clean, responsive layout for task items.

---

## How It Works

1. **Adding a Task**

   * Users can type into the input field and press **Enter** or click the **Submit button** to add tasks.
   * Each task is wrapped inside a `div` with a paragraph (`p`) and a delete button.

2. **Deleting a Task**

   * Clicking the delete **button** removes its parent task.
   * Clicking the delete **icon** inside the button also removes the parent task.

3. **Event Handling**

   * Direct event listeners are attached to delete buttons.
   * An event listener on the container (`todoBody`) uses event delegation to catch clicks on dynamic elements like buttons and icons.

---

## Technologies Used

* **HTML5** for structure
* **CSS3** for styling
* **Vanilla JavaScript** for logic and interactivity
* **Font Awesome** for icons

---

## Installation & Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/minuwu/todoApp.git
   cd todo-list-js
   ```
2. Open `index.html` in any modern browser.
3. Start adding and managing your tasks.

---

## Future Improvements

* Add task completion toggle with strikethrough styling.
* Local storage support to persist tasks between sessions.
* Sorting and filtering tasks (e.g., completed vs pending).

<!-- ---

# ATS-Friendly Descriptions

### Long Version

Developed a dynamic **To-Do List web application** using vanilla JavaScript, HTML, and CSS. Implemented DOM manipulation for task creation and deletion, event handling with both direct listeners and delegation, and user interactions such as adding tasks via the Enter key or a button. Demonstrated practical understanding of JavaScript fundamentals including node creation, appending elements, and handling nested event targets. Integrated Font Awesome icons for intuitive task deletion and ensured a clean, responsive layout.

### Short Version

Built a JavaScript-based To-Do List app featuring dynamic task creation, deletion, and event delegation for efficient DOM handling.

### One-Liners

* Created a To-Do List app with JavaScript, showcasing DOM manipulation and event delegation.
* Developed a lightweight task manager with add/remove functionality using vanilla JavaScript.
* Implemented dynamic UI updates and user interaction handling in a JavaScript To-Do application.

---
 -->
