export interface IResponse {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}

export type Person = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[] | string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[] | string;
  starships: string[] | string;
  url: string;
  vehicles: string[] | string;
};

export type Starship = {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[] | string;
  hyperdrive_rating: string;
  length: string;
  manufactirer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[] | string;
  starship_class: string;
  url: string;
};

export interface IPeopleProps {
  peopleArray: Person[];
}

export interface IGame {
  allCards: Person[] | Starship[];
}

export interface ICard {
  name: string;
  mass: string;
}

export interface IPlayer {
  deck: Person[];
  score: number;
  cardNumber: number;
  cardInfo: ICard;
  showCard: boolean;
  active: boolean;
  win: boolean;
}
