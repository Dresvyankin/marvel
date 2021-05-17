import React, { FC, SyntheticEvent } from 'react';
import styles from '../../SearchPage/SearchPage.module.css';
import { ComicCard } from '../ComicsCard/ComicCard';
import { IComicsData } from '../../models/comicsInterfaces';
import { Paginator } from '../../components/Pagination';

interface IComicsContainerProps {
  cards: IComicsData;
  cardsPerPage: number;
  currentPage: number;
  onChange: (_: SyntheticEvent, pageNumber: number) => void;
}

export const ComicsContainer: FC<IComicsContainerProps> = ({
  cards,
  cardsPerPage,
  currentPage,
  onChange,
}: IComicsContainerProps) => {
  if (!cards.results.length) {
    return <h1 className="title">No comics found</h1>;
  }

  return (
    <>
      <div className={styles.container}>
        {cards.results.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
      <Paginator
        currentPage={currentPage}
        onChange={onChange}
        totalPages={cards.total}
        cardsPerPage={cardsPerPage}
      />
    </>
  );
};
