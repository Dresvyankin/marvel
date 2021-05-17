import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import styles from './SearchPage.module.css';
import { History, Location } from 'history';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SearchPageLoader } from './SearchPageLoader/SearchPageLoader';
import { HeroesContainer } from './HeroContainer/HeroesContainer';
import { getHeroesPerPage, getSearchHeroes } from '../api/api';
import { IHeroData, Nullable } from '../models/heroesInterfaces';
import { getQueryParams } from '../utils';

export interface ISearchPageState {
  data: Nullable<IHeroData>;
  searchValue: string;
  currentPage: number;
  cardsPerPage: number;
  isSearching: boolean;
}

export interface RouteComponentProps {
  location: Location;
  history: History;
}

export class SearchPage extends Component<RouteComponentProps, ISearchPageState> {
  public constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      data: null,
      searchValue: '',
      currentPage: 1,
      cardsPerPage: 50,
      isSearching: false,
    };
  }

  public async componentDidMount(): Promise<void> {
    const { search } = this.props.location;
    const searchValue = getQueryParams(search);

    if (searchValue) {
      this.setState({ searchValue });
    }

    const heroes = await getHeroesPerPage(this.state.currentPage);
    this.setState({ data: heroes });
  }

  public handleOnChangeInput: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
    const searchValue: string = event.target.value;
    this.setState({ searchValue });

    if (!searchValue) {
      this.setState({ data: null, currentPage: 1 });
      getHeroesPerPage().then((data) => {
        this.setState({ data, isSearching: false });
      });
    }
  };

  public handleOnChangePage: (_: SyntheticEvent, pageNumber: number) => void = (_, pageNumber) => {
    const { searchValue, isSearching } = this.state;
    this.setState({ currentPage: pageNumber, data: null });

    if (isSearching) {
      getSearchHeroes(searchValue, pageNumber).then((heroes) => {
        this.setState({ data: heroes });
      });
      return;
    }

    getHeroesPerPage(pageNumber).then((data) => {
      this.setState({ data });
    });
  };

  public handleOnClickSearch: () => void = () => {
    const { searchValue } = this.state;
    const { history } = this.props;

    if (!searchValue.trim()) {
      return;
    }
    history.push(`?query=${searchValue}`);

    this.setState({ data: null });
    getSearchHeroes(searchValue).then((heroes) => {
      this.setState({ data: heroes, currentPage: 1, isSearching: true });
    });
  };

  public render(): JSX.Element {
    const { searchValue, currentPage, data, cardsPerPage } = this.state;
    return (
      <>
        <div className={styles.backgroundImg}></div>
        <div className={styles.container}>
          <SearchBlock
            searchValue={searchValue}
            onChangeInput={this.handleOnChangeInput}
            onClickHandle={this.handleOnClickSearch}
          />
          {data ? (
            <HeroesContainer
              currentPage={currentPage}
              cards={data}
              onChangePage={this.handleOnChangePage}
              cardsPerPage={cardsPerPage}
            />
          ) : (
            <SearchPageLoader cardsPerPage={cardsPerPage} />
          )}
        </div>
      </>
    );
  }
}
