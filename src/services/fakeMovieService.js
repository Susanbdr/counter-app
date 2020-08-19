const movies = [
  {
    _id: "1234",
    title: "Terminator",
    genre: { _id: 1, name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-30T19.04:28.809Z",
    liked: true,
  },
  {
    _id: "134",
    title: "Terminator",
    genre: { _id: 1, name: "Action" },
    numberInStock: 60,
    dailyRentalRate: 2.5,
  },
  {
    _id: "134555",
    title: "Terminator",
    genre: { _id: 2, name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "15",
    title: "Gladiator",
    genre: { _id: 2, name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "157",
    title: "10:30 To Yuma",
    genre: { _id: 2, name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
];

export function getMovies() {
  return movies;
}
