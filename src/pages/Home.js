import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions';
import { Container, Row, Col} from 'react-bootstrap'
import ClipLoader from 'react-spinners/ClipLoader';
import { Banner, RankCard } from '../components';

const Home = () => {
  const dispatch = useDispatch();

  const {
    trending,
    popularMovies,
    topRatedMovies,
    upComingMovies,
    load
  } = useSelector((state) => state.movie);

  const ranIdx = Math.floor(Math.random() * 20);

  const getData = () => {
    
  };

  useEffect(() => {
    dispatch(movieAction.getTrending());
    dispatch(movieAction.getMovies());
  }, []);

  if (!load.trend || !load.movie) {
    return (
      <div className='spinner'>
        <ClipLoader color='red' loading={ true } size={ 100 } />
      </div>
    );
  }

  return (
    <div>
      <Banner movie={ trending[ranIdx] } />

      <Container>
        <Row>
          {trending.slice(0, 6).map((movie, idx) => (
            <Col xl={ 2 } md={ 4 } sm={ 12 } key={ idx }>
              <RankCard movie={ movie } rank={ idx + 1 } key={ idx } />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home;