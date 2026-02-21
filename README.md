📝 Note Management CLI

A command-line based Note Management Application built using Node.js that allows users to create, search, delete, and manage notes with persistent storage.

The application also includes a web interface to view notes in the browser.

🚀 Features

Create a new note

View all notes

Search notes using filters

Remove notes by ID

Launch web interface to view notes

Delete all notes

Persistent storage using JSON file

Modular architecture with separate source files

🛠 Tech Stack

Node.js

JavaScript (ES6+)

File System (fs module)

Command Line Interface (CLI)

Express.js (if used for web command — remove if not)

dotenv

📂 Project Structure
note-management-cli/
│
├── src/               # Core logic
├── tests/             # Unit tests
├── db.json            # Notes storage
├── index.js           # Entry point
├── package.json
└── .env
⚙️ Installation

Clone the repository:

git clone https://github.com/Aditya240602/note-management-cli.git

Navigate to the directory:

cd note-management-cli

Install dependencies:

npm install
▶️ Usage

Run:

node index.js <command>
📌 Available Commands

Create a new note:

node index.js new "My first note"

View all notes:

node index.js all

Find matching notes:

node index.js find "keyword"

Remove a note by ID:

node index.js remove 1

Launch web interface:

node index.js web

Or specify a port:

node index.js web 3000

Delete all notes:

node index.js clean


👤 Author

Aditya Kumar
