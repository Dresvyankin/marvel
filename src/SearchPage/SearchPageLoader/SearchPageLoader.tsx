import React from 'react';
import classNames from 'classnames';
import classes from './SearchPageLoader.module.css';
import styles from '../SearchPage.module.css';

interface ISearchPageLoader {
  cardsPerPage: number;
}

export const SearchPageLoader: (props: ISearchPageLoader) => JSX.Element = ({ cardsPerPage }: ISearchPageLoader) => (
  <div className={styles.heroesContainer}>
    {[...Array(cardsPerPage)].map((_, i) => {
      return (
        <div className={classes.cardSkeletonWrapper} key={i}>
          <div className={classNames(classes.cardSkeleton, classes.pulsate)}>
            <div className={classNames(classes.titleSkeleton, classes.pulsateTitle)}></div>
          </div>
        </div>
      );
    })}
  </div>
);
