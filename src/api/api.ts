import { IComicsData, IResponseComics } from '../models/comicsInterfaces';
import axios, { AxiosResponse } from 'axios';
import { IHero, IHeroData, IResponseHeroes } from '../models/heroesInterfaces';

const API_KEY = 'f2bfbb8d9421efd0068e79250b5c1144';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/characters',
  params: {
    apikey: API_KEY,
    limit: 50,
  },
});

class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export const getSearchHeroes: (searchValue: string, page?: number) => Promise<IHeroData> = async (
  searchValue,
  page = 1,
) => {
  const offset = (page - 1) * 50;
  try {
    const response: AxiosResponse<IResponseHeroes> = await instance.get<IResponseHeroes>('', {
      params: {
        nameStartsWith: searchValue,
        offset: offset,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new ApiError(error.message);
  }
};

export const getHeroesPerPage: (page?: number) => Promise<IHeroData> = async (page = 1) => {
  const offset = (page - 1) * 50;
  try {
    const response: AxiosResponse<IResponseHeroes> = await instance.get<IResponseHeroes>('', {
      params: {
        offset: offset,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new ApiError(error.message);
  }
};

export const getComicsPerPage: (heroId: string, page: number) => Promise<IComicsData> = async (heroId, page) => {
  const offset = (page - 1) * 10;
  try {
    const response: AxiosResponse<IResponseComics> = await instance.get<IResponseComics>(`/${heroId}/comics`, {
      params: {
        limit: 10,
        offset: offset,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new ApiError(error.message);
  }
};

export const getHeroById: (heroId: string) => Promise<IHero> = async (heroId) => {
  try {
    const response: AxiosResponse<IResponseHeroes> = await instance.get<IResponseHeroes>(`/${heroId}`);
    return response.data.data.results[0];
  } catch (error) {
    throw new ApiError(error.message);
  }
};
