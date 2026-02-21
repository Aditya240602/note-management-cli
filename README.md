# 📝 Note Management CLI

A command-line based **Note Management Application** built using **Node.js** that allows users to create, search, delete, and manage notes with persistent storage.

The application also includes a web interface to view notes in the browser.

---

## 🚀 Features

- Create a new note  
- View all notes  
- Search notes using filters  
- Remove notes by ID  
- Launch web interface to view notes  
- Delete all notes  
- Persistent storage using JSON file  
- Modular architecture with separate source files  

---

## 🛠 Tech Stack

- **Node.js**
- **JavaScript (ES6+)**
- File System (`fs` module)
- Command Line Interface (CLI)
- Express.js (if used)
- dotenv

---

## ▶️ Usage
- node index.js <command>
## 📌 Available Commands
## Create a New Note
- node index.js new "My first note"
##  View All Notes
  node index.js all
  Find Notes
  node index.js find "keyword"
  Remove Note by ID
  node index.js remove 1
  Launch Web Interface
  node index.js web
  Delete All Notes
  node index.js clean

git clone https://github.com/Aditya240602/note-management-cli.git
cd note-management-cli
npm install
