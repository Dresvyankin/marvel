export interface IResponseComics {
  attributionHTML: string;
  attributionText: string;
  code: number;
  data: IComicsData;
  etag: string;
  status: string;
}

export interface IComicsData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IComic[];
}

export interface IComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: ITextObjects[];
  resourceURI: string;
  urls: IURL[];
  series: ISeries;
  variants: ISeries[];
  collections: ISeries[];
  collectedIssues: ISeries[];
  dates: IDateElement[];
  prices: IPrice[];
  thumbnail: IThumbnail;
  images: IImages[];
  creators: ICharacters;
  characters: ICharacters;
  stories: ICharacters;
  events: ICharacters;
}

interface ITextObjects {
  type: string;
  language: string;
  text: string;
}

interface IImages {
  path: string;
  extension: string;
}

interface ICharacters {
  available: number;
  collectionURI: string;
  items: IItems[];
  returned: number;
}

interface IItems {
  resourceURI: string;
  name: string;
  type: string;
}

interface IDateElement {
  type: string;
  date: string;
}

interface IPrice {
  type: string;
  price: number;
}

interface ISeries {
  resourceURI: string;
  name: string;
}

interface IThumbnail {
  path: string;
  extension: string;
}

interface IURL {
  type: string;
  url: string;
}
