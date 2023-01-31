import { v4 as uuidv4 } from "uuid";

let games = [
  {
    id: "1",
    name: "Tag",
    age: "2",
    minPlayers: "2",
    maxPlayers: "12",
    location: "outdoor",
    kind: "tag games",
    rules:
      "FAKE: Tag is a playground game involving two or more players chasing other players in an attempt to tag and mark them out of play, usually by touching with a hand. There are many variations; most forms have no teams, scores, or equipment. Usually, when a person is tagged, the tagger says, `Tag, you're 'it'!` The last one tagged during tag is `it` for the next round.",
  },
  {
    id: "2",
    name: "Slapjack",
    age: "4",
    minPlayers: "2",
    maxPlayers: "8",
    location: "indoor",
    kind: "card games",
    rules:
      "FAKE: Slapjack, also known as Slaps, is a card game of the matching family, generally played among children. The first player to slap their hand down on the jack takes it, as well as all the cards beneath it. The player winning these cards turns them face down, places them under their pile of cards, and shuffles them to form a new, larger pile. When more than one player slaps at a jack, the one whose hand is directly on top of the jack wins the pile. If a player slaps at any card in the center that is not a jack, they must give one card, face down, to the player of that card. When a player has no more cards left, they remain in the game until the next jack is turned. The player may slap at the jack in an effort to get a new pile. If the player fails to win that next pile, they are out of the game.",
    image: "/assets/Slapjack.png",
  },
  {
    id: "3",
    name: "Simon Says",
    age: "3",
    minPlayers: "2",
    maxPlayers: "8",
    location: "indoor",
    kind: "active games",
    rules:
      "FAKE: Kids love the chance for a challenge. This basic game is great for all ages because it can vary in difficulty depending on the age of the children. Use basic commands with toddlers to teach them basic movements and coordination (raise your right hand), or use complex and more confusing commands for older children to give them a challenge (pat your head and rub your tummy).",
    image: "./assets/Simon-Says-Game.png",
  },
  {
    id: "4",
    name: "Capture the Flag",
    age: "8",
    minPlayers: "6",
    maxPlayers: "12",
    location: "outdoor",
    kind: "active games",
    rules:
      "FAKE: Capture the Flag is a nostalgic game that gets kids up and moving. This game is great for large groups and helps kids practice strategy and teamwork. Capture the Flag is also best done outside, so find a large field and start playing!",
    image: "/assets/capture_the_flag.png",
  },
  {
    id: "5",
    name: "Rock, Paper, Scissors",
    age: "5",
    minPlayers: "2",
    maxPlayers: "2",
    location: "indoor",
    kind: "hand games",
    rules:
      "FAKE: Rock, Paper, Scissors is a great game if you have just a couple of people. This game (especially when played on repeat) can help kids learn to anticipate what comes next. If they get bored with Rock, Paper, Scissors, have them try a variation or have them make up their own!",
    image: "/assets/rock-paper-scissors.png",
  },
  {
    id: "6",
    name: "Musical Chairs",
    age: "4",
    minPlayers: "3",
    maxPlayers: "12",
    location: "indoor",
    kind: "jumping games",
    rules:
      "FAKE: This game is the perfect mix of high energy, music, and competition. Musical Chairs is a good game for a couple of kids, or lots of kids! Pick some fun music, make a circle of chairs, and get moving!",
    image: "/assets/musical-chairs.png",
  },
  {
    id: "7",
    name: "Sardines",
    age: "6",
    minPlayers: "3",
    maxPlayers: "12",
    location: "outdoor",
    kind: "hiding games",
    rules:
      "FAKE: Sardines is an active game that is played like hide and go seek — only in reverse!  One person hides, and everyone else searches for the hidden person.  Whenever a person finds the hidden person, they quietly join them in their hiding spot. Soon, the hidden group starts to look like a bunch of sardines!",
    image: "/assets/game-sardines.png",
  },
  {
    id: "8",
    name: "Steal the Bacon",
    age: "10",
    minPlayers: "8",
    maxPlayers: "12",
    location: "outdoor",
    kind: "jumping games",
    rules:
      "FAKE: Steal the Bacon is a fun game that does not involve stealing bacon from the neighbor's house or the host's house. In fact, it has nothing to do with a piece of meat",
    image: "/assets/Steal-the-bacon.png",
  },
  {
    id: "9",
    name: "Walrus",
    age: "8",
    minPlayers: "8",
    maxPlayers: "12",
    location: "indoor",
    kind: "tag games",
    rules:
      "FAKE: Walrus is a guessing game wherein the players mask an activity or action with a word like 'walrus,' and one person has to guess what it is. The game encourages the kids to think and use language intelligently. The game also teaches kids to respond consciously, after careful thinking.",
  },
  {
    id: "10",
    name: "Body Spellers",
    age: "8",
    minPlayers: "4",
    maxPlayers: "12",
    location: "outdoor",
    kind: "tag games",
    rules:
      "FAKE: This is a body-bending game that makes your child stretch, bend, twist and turn as needed, to spell a word.",
    image: "Body-spellers.png",
  },
];

export const createGame = (req, res) => {
  const game = req.body;

  if (
    game.name &&
    game.age &&
    game.minPlayers &&
    game.maxPlayers &&
    game.location &&
    game.kind &&
    game.rules
  ) {
    const gameId = uuidv4();
    games.push({
      name: game.name,
      age: game.age,
      minPlayers: game.minPlayers,
      maxPlayers: game.maxPlayers,
      location: game.place,
      kind: game.kind,
      rules: game.rules,
      id: gameId,
    });
    console.log(games);
    res
      .status(201)
      .send(`Game with the id ${gameId} was added to the database`);
  } else {
    res.status(400).send(`Please fill all fields`);
  }
};

export const getGames = (req, res) => {
  res.status(200).send(games);
};

export const getGameName = (req, res) => {
  if (req.query) {
    const name = req.query.name;
    const age = req.query.age;
    const minPlayers = req.query.minPlayers;
    const maxPlayers = req.query.maxPlayers;
    const location = req.query.location;
    const kind = req.query.kind;
    console.log(req.query);
    let foundGameName = [];
    if (name) {
      foundGameName = games.filter((game) => game.name.includes(name));
    } else {
      let sortedGames = games;
      if (age) {
        sortedGames = sortedGames.filter((game) => game.age.includes(age));
      }
      if (minPlayers) {
        sortedGames = sortedGames.filter(
          (game) => +game.minPlayers >= +minPlayers
        );
        console.log("Minplayers:", minPlayers);
      }
      if (maxPlayers) {
        sortedGames = sortedGames.filter(
          (game) => +game.maxPlayers <= +maxPlayers
        );
        console.log("Maxplayers:", maxPlayers);
      }
      if (location) {
        sortedGames = sortedGames.filter((game) =>
          game.location.includes(location)
        );
      }
      if (kind) {
        sortedGames = sortedGames.filter((game) => game.kind.includes(kind));
      }
      foundGameName = sortedGames;
    }

    if (foundGameName) {
      console.log(foundGameName);
      res.status(200).send(foundGameName);
    } else {
      res.status(400).send(`Game with the name ${name} was not found`);
    }
  }
};

export const getGame = (req, res) => {
  const { id } = req.params;
  const foundGame = games.find((game) => game.id === id);

  console.log(foundGame);
  if (foundGame) {
    res.status(200).send(foundGame);
  } else {
    res.status(400).send(`Game with the name ${id} was not found`);
  }
};
