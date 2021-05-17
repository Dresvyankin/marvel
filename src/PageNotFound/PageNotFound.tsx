import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

export const PageNotFound: () => JSX.Element = () => (
  <div className={styles.mainbox}>
    <h1 className={styles.err}>404</h1>
    <div className={styles.msg}>
      WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND!
      <p>
        Let&apos;s go <Link to="/">home</Link> and try from there.
      </p>
    </div>
  </div>
);
