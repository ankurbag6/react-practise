export default function PlayerCard({ player, isSelected, onAdd, onRemove }) {
  return (
    <div
      data-testid={`player-${player.id}`}
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 12,
        width: 160,
        background: isSelected ? "#e6f7e6" : "white",
      }}
    >
      <h4 style={{ margin: "0 0 8px" }}>{player.name}</h4>
      <p style={{ margin: 0 }}>Position: {player.position}</p>
      <p style={{ margin: "0 0 8px" }}>Club: {player.club}</p>

      {isSelected ? (
        <button onClick={() => onRemove(player.id)}>Remove</button>
      ) : (
        <button onClick={() => onAdd(player)}>Add</button>
      )}
    </div>
  );
}
