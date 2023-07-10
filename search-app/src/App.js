import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

const App = () => {
  return (
    <div>
      <Carousel>
        <Container>
          <SearchForm />
        </Container>
      </Carousel>
      <Results />
    </div>
  );
};

export default App;
