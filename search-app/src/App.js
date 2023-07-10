import React, { Component } from "react";
import { Container, Carousel } from 'react-bootstrap';
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";


class App extends Component {
  render(){
  return ( 
    <div>
      <Carousel>
        <Container>
          <h1>Search App</h1>
          <p>This is a simple search app</p>
          <SearchForm />
        </Container>
      </Carousel>
    </div>

  )


}
}

export default App;
