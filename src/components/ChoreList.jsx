function ChoreList({ room, chores, onBack }) {
    return (
      <div className="chore-container">
        <h2 className="chore-heading">
          🧹 Chores in the {room.charAt(0).toUpperCase() + room.slice(1)}
        </h2>
        <ul className="chore-list">
          {chores.map((chore, index) => (
            <li key={index}>{chore}</li>
          ))}
        </ul>
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      </div>
    );
  }
  
  export default ChoreList;
  
  