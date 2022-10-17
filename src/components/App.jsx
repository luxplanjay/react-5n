import { Component } from 'react';
import { fetchBreeds, fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { GlobalStyle } from './GlobalStyle';
import { BreedSelect } from './BreedSelect';

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();
      this.setState({ breeds: breeds });
    } catch (error) {
      this.setState({
        error:
          'Мы не смогли загрузить породы собачек, пожалуйста перезагрузите страницу чтобы попробовать еще раз 🥹',
      });
    }
  }

  selectBreed = async (breedId) => {
    try {
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch (e) {
      this.setState({
        error:
          'Упс, мы не смогли загрузить собачку 😭. Попробуйте еще раз или перезагрузите страницу 😇',
      });
    }
  };

  render() {
    const { breeds, dog, error } = this.state;

    return (
      <>
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {dog && <Dog dog={dog} />}
        <GlobalStyle />
      </>
    );
  }
}
