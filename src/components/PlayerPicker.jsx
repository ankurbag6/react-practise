import { useState } from "react";
import PlayerCard from "./PlayerCard";

const players = [
  { id: 1, name: "Messi", position: "Forward", club: "Inter Miami" },
  { id: 2, name: "Ronaldo", position: "Forward", club: "Al Nassr" },
  { id: 3, name: "Neymar", position: "Winger", club: "Santos" },
];

export default function PlayerPicker() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addPlayer = (player) => {
    setSelectedPlayers((prev) =>
      prev.some((p) => p.id === player.id) ? prev : [...prev, player] // no duplicates
    );
  };

  const removePlayer = (id) => {
    setSelectedPlayers((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h3>All Players</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isSelected={selectedPlayers.some((p) => p.id === player.id)}
            onAdd={addPlayer}
            onRemove={removePlayer}
          />
        ))}
      </div>

      <h3>Selected Players</h3>
      {selectedPlayers.length === 0 ? (
        <p>No players selected</p>
      ) : (
        <ul>
          {selectedPlayers.map((player) => (
            <li key={player.id} data-testid={`selected-${player.id}`}>
              {player.name}
              <button onClick={() => removePlayer(player.id)}>x</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
