export interface IResponseHeroes {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IHeroData;
}

export interface IHeroData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IHero[];
}

export interface IHero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
  comics: IComics;
  series: IComics;
  stories: IStories;
  events: IComics;
  urls: IURL[];
}

interface IComics {
  available: number;
  collectionURI: string;
  items: IComicsItem[];
  returned: number;
}

interface IComicsItem {
  resourceURI: string;
  name: string;
}

interface IStories {
  available: number;
  collectionURI: string;
  items: IStoriesItem[];
  returned: number;
}

interface IStoriesItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface IThumbnail {
  path: string;
  extension: string;
}

interface IURL {
  type: string;
  url: string;
}

export type Nullable<T> = T | null;
