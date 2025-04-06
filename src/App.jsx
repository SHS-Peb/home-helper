import { useState } from "react";
import { chores } from "./data/choresData";
import RoomButton from "./components/RoomButton";
import ChoreList from "./components/ChoreList";
import "./index.css";

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">Home Helper</h1>

      {!selectedRoom ? (
        <div className="room-grid">
          {Object.keys(chores).map((room) => (
            <RoomButton key={room} room={room} onClick={() => setSelectedRoom(room)} />
          ))}
        </div>
      ) : (
        <ChoreList
          room={selectedRoom}
          chores={chores[selectedRoom]}
          onBack={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
}

export default App;

