import React from 'react';
import Button from '@atlaskit/button';
import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';
import { IHero } from '../../models/heroesInterfaces';

interface IHeroCardProps {
  hero: IHero;
}

export const HeroCard: (props: IHeroCardProps) => JSX.Element = ({ hero: { thumbnail, name, id } }: IHeroCardProps) => (
  <div className={styles.cardWrapper}>
    <div className={styles.card}>
      <img className={styles.image} src={`${thumbnail.path}/portrait_fantastic.jpg`} alt="Hero Avatar" />
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.details}>
          <Link to={`/comics/${id}`} style={{ textDecoration: 'none' }}>
            <Button appearance="danger">See comics</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
