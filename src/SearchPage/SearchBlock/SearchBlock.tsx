import React, { ChangeEvent, KeyboardEvent } from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import styles from './SearchBlock.module.css';

interface ISearchBlockProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  searchValue: string;
}

export const SearchBlock: (props: ISearchBlockProps) => JSX.Element = ({
  onChange,
  onClick,
  searchValue,
}: ISearchBlockProps) => {
  const onKeyPressEnter: (event: KeyboardEvent<HTMLInputElement>) => void = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div className={styles.container}>
      <Textfield
        css={{
          paddingLeft: 15,
          outline: 'none',
          '& > [data-ds--text-field--input]': {
            fontSize: 25,
          },
        }}
        placeholder="Search character"
        aria-label="default text field"
        onChange={onChange}
        value={searchValue}
        onKeyPress={onKeyPressEnter}
      />
      <Button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '25px',
          height: '100%',
          marginLeft: '30px',
        }}
        appearance="primary"
        onClick={onClick}
      >
        Search
      </Button>
    </div>
  );
};
