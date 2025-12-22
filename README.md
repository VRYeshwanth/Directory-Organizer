# Directory Organizer

A minimal Electron-based desktop application that organizes files in a selected directory based on their file extensions.  
The app helps keep folders clean by automatically grouping files into extension-based subfolders.

---

## Features

-   Simple and minimal user interface
-   Organizes files based on their extensions (e.g., `.jpg`, `.pdf`, `.mp3`)
-   Creates folders automatically if they do not exist
-   Works on local directories

---

## How It Works

1. Select a directory.
2. The app scans all files in the directory.
3. Files are moved into folders named after their extensions.
    - Example:
        ```
        Downloads/
        ├── jpg/
        ├── pdf/
        ├── mp3/
        └── txt/
        ```

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

![Image 1](./images/Image%201.png)
