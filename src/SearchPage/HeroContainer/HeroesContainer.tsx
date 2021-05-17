import React, { SyntheticEvent } from 'react';
import styles from '../SearchPage.module.css';
import { HeroCard } from '../HeroCard/HeroCard';
import { IHeroData } from '../../models/heroesInterfaces';
import { Paginator } from '../../components/Pagination';

interface IHeroesContainerProps {
  cards: IHeroData;
  cardsPerPage: number;
  currentPage: number;
  onChangePage: (_: SyntheticEvent, pageNumber: number) => void;
}

export const HeroesContainer: (props: IHeroesContainerProps) => JSX.Element = ({
  cards: { results, total },
  cardsPerPage,
  currentPage,
  onChangePage,
}: IHeroesContainerProps) => {
  if (results.length === 0) {
    return <h1 className="title">No matches found</h1>;
  }

  return (
    <>
      <div className={styles.heroesContainer}>
        {results.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
      <Paginator currentPage={currentPage} onChangePage={onChangePage} totalPages={total} cardsPerPage={cardsPerPage} />
    </>
  );
};
