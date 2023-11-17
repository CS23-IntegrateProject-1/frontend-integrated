import { useEffect, useState } from "react";
import * as io from "socket.io-client";
//import css
import "./index.css";
import { ServerToClientEvents, ClientToServerEvents } from "../../../../typing";

export const TestingFeat12 = () => {
  const socket: io.Socket<ServerToClientEvents, ClientToServerEvents> =
	io.connect("http://localhost:8080");  
  
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [room, setRoom] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("clientMsg", { msg, room });
    setMsg("");
  };

  useEffect(() => {
    socket.on("serverMsg", (data) => {
      setMessages([...messages!, data.msg]);
    });
  }, [socket, messages]);
  console.log(messages);

  return (
    <div className="App">
      <div>
        <h1>Messages</h1>
        {messages.map((msg, i) => (
          <p key={i} className="msg">
            {msg}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="user-interface">
        <input
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          type="text"
          placeholder="Enter Room Key"
          style={{ color: "black" }}
        />
        
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="Enter message"
          style={{ color: "black" }}
        />

        <button>Send Message</button>
      </form>
    </div>
  );
};
