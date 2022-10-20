import { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';
import { ErrorMessage } from './ErrorMessage';
import { errorMessages } from 'constants';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const breeds = await fetchBreeds();
      this.setState({ breeds });
    } catch {
      this.setState({ error: errorMessages.fetchBreeds });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  buildOptions = () => {
    return this.state.breeds.map((breed) => ({
      value: breed.id,
      label: breed.name,
    }));
  };

  render() {
    const { error, isLoading } = this.state;
    const { onSelect } = this.props;
    const options = this.buildOptions();

    return (
      <div>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={(option) => onSelect(option.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}
