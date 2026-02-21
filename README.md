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
- **Express.js**
- **dotenv**

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes bundled with Node.js)

---

## ⚙️ Installation

```bash
git clone https://github.com/Aditya240602/note-management-cli.git
cd note-management-cli
npm install
```

---

## ▶️ Usage

```bash
node index.js <command>
```

---

## 📌 Available Commands

### ➕ Create a New Note

```bash
node index.js new "My first note"
```

### 📋 View All Notes

```bash
node index.js all
```

### 🔍 Find Notes by Keyword

```bash
node index.js find "keyword"
```

### 🗑️ Remove a Note by ID

```bash
node index.js remove 1
```

### 🌐 Launch Web Interface

```bash
node index.js web
```

### 🧹 Delete All Notes

```bash
node index.js clean
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
