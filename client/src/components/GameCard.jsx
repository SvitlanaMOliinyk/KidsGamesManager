
export default function GameCard({ game }) {
  const { name, url } = game;

  return (
    <div className="image-container">
      <img src={url} alt={name} className="image-game" width="300" />
      <div className="game-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
}
