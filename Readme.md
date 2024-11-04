# Code Editor WebSocket Server

This project is a WebSocket server designed to support real-time collaborative editing for a code editor application. It utilizes `y-websocket` and `yjs` to manage document synchronization across multiple clients.

## Author

**Danny Wang**

## Features

- Real-time collaboration for code editing
- WebSocket-based communication
- Supports multiple clients editing the same document simultaneously

## Technologies Used

- Node.js
- WebSocket
- y-websocket
- yjs

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/code-editor-websocket-server.git
   cd code-editor-websocket-server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

To start the WebSocket server, run the following command:

```bash
npm start
```

The server will run on the specified port (default is 1234).

### Usage

Connect your code editor client to the WebSocket server using the following URL:

```
ws://localhost:1234
```
