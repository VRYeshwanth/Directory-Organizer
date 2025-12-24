# Directory Organizer

A clean and modern Electron-based desktop application that organizes files in a selected directory by grouping them into meaningful category-based folders.

The app is designed as a lightweight utility to keep directories tidy with a single click, while providing clear feedback about what was organized, skipped, or failed.

---

## Features

-   Modern and minimal user interface
-   Organizes files into category-based folders (Images, Documents, PDFs, Archives, etc.)
-   Automatically creates category folders if they do not exist
-   Displays statistics after each organize operation
-   Safely handles file conflicts and errors without crashing
-   Works on any local directory

---

## How It Works

1. Select a directory using the file picker.
2. The app scans all files in the selected directory (non-recursive).
3. Each file is categorized based on its extension.
4. Files are moved into folders named after their category.
5. A results modal displays detailed statistics.

### Example structure after organizing

    ```
    Downloads/
    ├── Images/
    ├── PDF/
    ├── Documents/
    └── Archives/
    ```

## Result Statistics

After organizing, the app shows:

-   Total files found
-   Number of folders detected
-   Files successfully organized
-   Skipped files (unsupported or ignored)
-   Conflicts (existing files)
-   Errors (permission or move failures)

---

## Tech Stack

-   **Electron**
-   **JavaScript**
-   **Node.js**
-   HTML & CSS (for UI)

---

## Installation

### Prerequisites

-   Node.js installed on your system
-   npm (comes with Node.js)

### Steps

```bash
git clone https://github.com/VRYeshwanth/Directory-Organizer
cd Directory-Organizer
npm install
npm start
```

### Screenshots

![Main UI](./assets/images/Image%201.png)
![Results Modal](./assets/images/Image%202.png)
