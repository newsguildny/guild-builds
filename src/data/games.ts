interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  live: boolean;
}

export const games: Game[] = [
  {
    "id": 1,
    "name": "Frogger 8th Ave",
    "description": "Description 1",
    "image": "frogger.jpg",
    "link": "#",
    "live": true
  },
  {
    "id": 2,
    "name": "Scabby’s Fair Contract Builder",
    "description": "Description 4",
    "image": "scabbys-fair-contract.jpg",
    "link": "#",
    "live": true
  },
  {
    "id": 3,
    "name": "Match Strike",
    "description": "Description 2",
    "image": "match-strike.jpg",
    "link": "https://www.match-strike.com/",
    "live": true
  },
  {
    "id": 4,
    "name": "Word Search",
    "description": "Description 4",
    "image": "word-search.jpg",
    "link": "#",
    "live": true
  },
  {
    "id": 5,
    "name": "Connected",
    "description": "Description 3",
    "image": "connected.jpg",
    "link": "https://connections.swellgarfo.com/game/-OB15lz2phb8ai9RwufV",
    "live": true
  },
  {
    "id": 6,
    "name": "Strikle",
    "description": "Description 4",
    "image": "strikle.jpg",
    "link": "#",
    "live": true
  },
  {
    "id": 7,
    "name": "Crossword",
    "description": "Description 4",
    "image": "",
    "link": "#",
    "live": false
  },
  {
    "id": 8,
    "name": "Hangman",
    "description": "Description 4",
    "image": "",
    "link": "#",
    "live": false
  },
  {
    "id": 9,
    "name": "Decision Tree",
    "description": "Description 4",
    "image": "",
    "link": "#",
    "live": false
  }
]
