import { Nullable } from './models/heroesInterfaces';

export const calculateNumberOfPages: (totalCards: number, cardsPerPage: number) => Array<number> = (
  totalCards,
  cardsPerPage,
) => {
  const amountOfPages: number = Math.ceil(totalCards / cardsPerPage);
  return Array.from({ length: amountOfPages }, (_, k) => k + 1);
};

export const getQueryParams: (params: string) => Nullable<string> = (params) => {
  const searchParams = new URLSearchParams(params);
  return searchParams.get('query');
};
