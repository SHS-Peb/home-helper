function RoomButton({ room, onClick }) {
    return (
      <button className="room-button" onClick={onClick}>
        {room.charAt(0).toUpperCase() + room.slice(1)}
      </button>
    );
  }
  
  export default RoomButton;
  
  