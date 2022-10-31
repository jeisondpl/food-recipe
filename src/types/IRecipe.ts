export interface IRecipe {
  id: number;
  title: string
  tag: string
  star: string
  servings: number
  readyInMinutes: number
  difficulty: string
  image?: string
}

export interface ICardActions {
  id: number;
  title: string
  image: string
  imageType?: string
}


export interface Result {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface IResponse {
  results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}