import Result from "./Result";

const Results = ({ data: games, error }) => {
  return (
    <main>
      <ul>
        {games.length ? (
          games.map((game) => (
            <Result key={game._id} game={game} error={error} />
          ))
        ) : (
          <p>No Matching Games</p>
        )}
      </ul>
    </main>
  );
};
export default Results;
