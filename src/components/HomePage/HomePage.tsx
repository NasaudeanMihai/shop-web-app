import { FC, ReactElement } from 'react';

import './homePage.css';

import PopUpButton from '../../components/PopUpButton/PopUpButton';
import TopProducts from '../TopProducts/TopProducts';
import NewsLetter from '../NewsLetter/NewsLetter';
import LatestNews from '../LatestNews/LatestNews';
import Subscribe from '../Subscribe/Subscribe';

const HomePage: FC = (): ReactElement => {
  return (
    <div className="wrapper-home-page container">
      <div className="row" style={{ marginTop: '5rem' }}>
        <div className="col align-items-start">
          <h2 className="fs-1 fw-bold">VW Beetle</h2>
        </div>
        <div className="col align-items-end">
          <div className="row">
            <PopUpButton title={'TOPS'} options={['T-Shirts', 'Shirts', 'Blouses']} />
            <PopUpButton title={'BOTTOMS'} options={['T-Shirts', 'Shirts', 'Blouses']} />
          </div>
        </div>
      </div>
      <NewsLetter />
      <div className="row">
        <div className="container">
          <TopProducts />
          <LatestNews />
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
