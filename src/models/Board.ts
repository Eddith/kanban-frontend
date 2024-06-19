export interface Card {
  _id: string;
  title: string;
  description: string;
  color: string;
}

export interface List {
  _id: string;
  name: string;
  cards: Card[];
}

export interface Board {
  _id: string;
  title: string;
  lists: List[];
}
