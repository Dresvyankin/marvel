import React from 'react';
import classNames from 'classnames';
import styles from './ComicsPageLoader.module.css';

export const ComicsPageLoader: () => JSX.Element = () => (
  <>
    {[...Array(5)].map((_, i) => {
      return (
        <div key={i} className={styles.card}>
          <div className={classNames(styles.cardLeft, styles.pulsateCardLeft)}></div>
          <div className={classNames(styles.cardRight, styles.pulsateCardRight)}>
            <div className={classNames(styles.cardTitle, styles.pulsateText)}></div>
            <div>
              <div className={styles.cardDetail}>
                <div className={styles.pulsateText}></div>
                <div className={styles.pulsateText}></div>
                <div className={styles.pulsateText}></div>
              </div>
              <div className={classNames(styles.cardText, styles.pulsateText)}></div>
              <div className={styles.cardPrice}>
                <div className={styles.pulsateText}></div>
                <div className={styles.pulsateText}></div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </>
);
