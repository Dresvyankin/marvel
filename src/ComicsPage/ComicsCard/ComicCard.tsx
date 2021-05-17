import React from 'react';
import styles from './ComicsCard.module.css';
import { IComic } from '../../models/comicsInterfaces';

interface IComicsCardProps {
  comic: IComic;
}

export const ComicCard: (props: IComicsCardProps) => JSX.Element = ({
  comic: { thumbnail, title, dates, pageCount, format, prices, description },
}: IComicsCardProps) => {
  const year = new Date(Date.parse(dates[0].date)).getFullYear();
  return (
    <div className={styles.card}>
      <img className={styles.cardLeft} src={`${thumbnail.path}/standard_fantastic.jpg`} alt="Comic avatar" />
      <div className={styles.cardRight}>
        <h1>{title}</h1>
        <div className={styles.cardRightDetails}>
          <ul>
            <li>{year}</li>
            <li>{pageCount} pages</li>
            <li>{format}</li>
            <li>
              Price:
              <span>{` ${prices[0].price} $`}</span>
            </li>
          </ul>
          <div className={styles.cardRightReview}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
