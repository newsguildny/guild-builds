interface Game {
  id: number
  name: string
  description: string
  image: string
  link: string
  live: boolean
}

export const games: Game[] = [
  {
    id: 1,
    name: 'Frogger 8th Ave',
    description: 'Description 1',
    image: 'frogger.jpg',
    link: './frogger',
    live: true,
  },
  {
    id: 2,
    name: 'Scabby’s Fair Contract Builder',
    description: 'Description 4',
    image: 'scabbys-fair-contract.jpg',
    link: 'https://grantyi.github.io/nyt-union-stacker/',
    live: true,
  },
  {
    id: 3,
    name: 'Match Strike',
    description: 'Description 2',
    image: 'match-strike.jpg',
    link: 'https://www.match-strike.com/',
    live: true,
  },
  {
    id: 4,
    name: 'Word Search',
    description: 'Description 4',
    image: 'word-search.jpg',
    link: 'https://steven-nunez.github.io/techguild-word-search-game/',
    live: true,
  },
  {
    id: 5,
    name: 'Connections: Strike Edition',
    description: 'Description 3',
    image: 'connected.jpg',
    link: 'https://connections.swellgarfo.com/game/-OBGN31SaJDuhk6Gl7Sz',
    live: true,
  },
  {
    id: 6,
    name: 'Strikle',
    description: 'Description 4',
    image: 'strikle.jpg',
    link: 'https://strikle.org/',
    live: true,
  },
  {
    id: 7,
    name: 'Crossword',
    description: 'Description 4',
    image: '',
    link: '#',
    live: false,
  },
  {
    id: 8,
    name: 'STRIKEMAN',
    description: 'Description 4',
    image: 'strike-man.jpg',
    link: 'https://hnelken.github.io/techguild-strikeman/',
    live: true,
  },
  {
    id: 9,
    name: 'Decision Tree',
    description: 'Description 4',
    image: '',
    link: '#',
    live: false,
  },
  {
    id: 10,
    name: 'Trivia and Jokes',
    description: 'Description 4',
    image: 'trivia-and-jokes.jpg',
    link: 'https://nyt-tech-guild-trivia-and-jokes.vercel.app/',
    live: true,
  },
  {
    id: 11,
    name: 'Mini Crossword: Strike Edition',
    description: 'Description 4',
    image: 'mini-crossword.jpg',
    link: 'https://mini.toomuchdog.com/',
    live: true,
  },
  {
    id: 12,
    name: 'Guild Adventure',
    description: 'Description 4',
    image: 'adventure.png',
    link: './adventure.html',
    live: true
  },
  {
    id: 13,
    name: 'Wide Guild Brick Breaker',
    description: 'Description 4',
    image: 'wide-guild-brick-breaker.jpg',
    link: 'https://sameermore412.github.io/TechUnionBrickBreaker/BrickBreaker.html',
    live: true,
  },
]
