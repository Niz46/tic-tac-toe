import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editPlayerName = <span className="player-name">{playerName}</span>;
   
  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
