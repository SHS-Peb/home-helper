import { useState } from 'react';

function ChoreList({ room, chores, onBack }) {
  const [checkedChores, setCheckedChores] = useState(
    chores.reduce((acc, chore) => {
      acc[chore] = false; 
      return acc;
    }, {})
  );

  const handleCheckboxChange = (chore) => {
    setCheckedChores((prevCheckedChores) => ({
      ...prevCheckedChores,
      [chore]: !prevCheckedChores[chore], 
    }));
  };

  return (
    <div className="chore-container">
      <h2 className="chore-heading">
        Chores in the {room.charAt(0).toUpperCase() + room.slice(1)}
      </h2>
      <ul className="chore-list">
        {chores.map((chore, index) => (
          <li key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={chore}
              checked={checkedChores[chore]}
              onChange={() => handleCheckboxChange(chore)}
              className="form-checkbox"
            />
            <label htmlFor={chore} className={checkedChores[chore] ? "line-through" : ""}>
              {chore}
            </label>
          </li>
        ))}
      </ul>
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
    </div>
  );
}

export default ChoreList;
