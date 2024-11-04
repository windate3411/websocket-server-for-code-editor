import { WebSocketServer } from "ws";
import * as http from "http";
import { setupWSConnection } from "y-websocket/bin/utils";

const server = http.createServer((_, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("WebSocket server running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", setupWSConnection);

const PORT = process.env.PORT || 1234;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
