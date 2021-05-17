import React, { Component, SyntheticEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import { ComicsPageLoader } from './ComicsPageLoader/ComicsPageLoader';
import { IComicsData } from '../models/comicsInterfaces';
import { ComicsContainer } from './ComicsContainer/ComicsContainer';
import { getComicsPerPage, getHeroById } from '../api/api';
import { Nullable } from '../models/heroesInterfaces';

interface MatchParams {
  heroId: string;
}

interface IComicsPageState {
  data: Nullable<IComicsData>;
  hero: Nullable<string>;
  currentPage: number;
  cardsPerPage: number;
}

export class ComicsPage extends Component<RouteComponentProps<MatchParams>, IComicsPageState> {
  public constructor(props: RouteComponentProps<MatchParams>) {
    super(props);
    this.state = {
      data: null,
      hero: null,
      currentPage: 1,
      cardsPerPage: 10,
    };
  }

  public async componentDidMount(): Promise<void> {
    const { heroId } = this.props.match.params;
    const { currentPage } = this.state;

    const { name } = await getHeroById(heroId);
    const comics = await getComicsPerPage(heroId, currentPage);
    this.setState({ data: comics, hero: name });
  }

  public handleOnChangePage: (_: SyntheticEvent, pageNumber: number) => void = (_, pageNumber) => {
    const { heroId } = this.props.match.params;

    this.setState({ currentPage: pageNumber, data: null });
    getComicsPerPage(heroId, pageNumber).then((data) => {
      this.setState({ data });
    });
  };

  public render(): JSX.Element {
    const { currentPage, data, cardsPerPage, hero } = this.state;
    return (
      <>
        <h1 className="title">{hero}</h1>
        {data ? (
          <ComicsContainer
            currentPage={currentPage}
            cards={data}
            onChangePage={this.handleOnChangePage}
            cardsPerPage={cardsPerPage}
          />
        ) : (
          <ComicsPageLoader />
        )}
      </>
    );
  }
}
