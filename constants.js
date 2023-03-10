const BASE_URL = "https://www.omdbapi.com/?apikey=4c8a6d5d";

const LIST_MOVIES = [
  "love",
  "river",
  "action",
  "spider",
  "ant",
  "thor",
  "you",
  "iron",
  "steel",
  "wind"
]

// global state
let randomSearchPhrase = getRandomFromList(LIST_MOVIES);